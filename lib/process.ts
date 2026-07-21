import path from 'path'
import fs from 'fs-extra'
import { promisify } from 'util'
import pumpCb from 'pump'
import { parse } from 'csv-parse'
import { stringify } from 'csv-stringify'
import stream from 'stream'
import type { ProcessingContext } from '@data-fair/lib-common-types/processings.js'
import type { ProcessingConfig } from '#types/processingConfig/index.ts'
import headers from './headers/cnam.json' with { type: 'json' }

const pump = promisify(pumpCb) as (...streams: unknown[]) => Promise<void>

type TransformFn = (item: Record<string, any>) => any

let shouldBeStopped = false
export const setShouldBeStopped = (v: boolean): void => { shouldBeStopped = v }
export const isStopped = (): boolean => shouldBeStopped

const process = async (processingConfig: ProcessingConfig, dir: string, log: ProcessingContext<ProcessingConfig>['log']): Promise<void> => {
  const readStream = fs.createReadStream(path.join(dir, processingConfig.processType + '-source.csv'), { objectMode: true })
  const writeStream = fs.createWriteStream(path.join(dir, processingConfig.processType + '-transformed.csv'), { flags: 'w' })
  const transform = (await import('./transforms/' + processingConfig.processType + '.ts')).default as TransformFn
  let delimiter = ','
  if (['bpe', 'cnam'].includes(processingConfig.processType)) delimiter = ';'
  else if (processingConfig.processType === 'merimee') delimiter = '|'

  const parseOptions: Record<string, any> = { columns: true, delimiter, bom: true }
  if (processingConfig.processType === 'cnam') {
    parseOptions.quote = null
    parseOptions.columns = headers
  }
  await pump(
    readStream,
    parse(parseOptions),
    new stream.Transform({
      objectMode: true,
      transform: async (obj, _, next) => {
        if (shouldBeStopped) return next()
        const transformed = transform(obj)
        if (processingConfig.filter && processingConfig.filter.column && transformed[processingConfig.filter.column] !== processingConfig.filter.value) next()
        else next(null, transformed)
      }
    }),
    stringify({ header: true, quoted_string: processingConfig.processType !== 'cnam' }),
    writeStream
  )
  writeStream.end()
}

export default process
