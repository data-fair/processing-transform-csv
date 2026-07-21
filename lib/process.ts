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

const PROGRESS_TASK = 'Transformation des données'

const process = async (processingConfig: ProcessingConfig, dir: string, log: ProcessingContext<ProcessingConfig>['log']): Promise<void> => {
  await log.step(PROGRESS_TASK)

  const sourcePath = path.join(dir, processingConfig.processType + '-source.csv')
  const readStream = fs.createReadStream(sourcePath)
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

  const { size: totalBytes } = await fs.stat(sourcePath)
  await log.task(PROGRESS_TASK)
  let bytesRead = 0
  let lastPct = -1
  const progressStream = new stream.Transform({
    transform (chunk, _, next) {
      bytesRead += chunk.length
      if (totalBytes > 0) {
        const pct = Math.floor((bytesRead / totalBytes) * 100)
        if (pct !== lastPct) {
          lastPct = pct
          log.progress(PROGRESS_TASK, bytesRead, totalBytes).catch(() => {})
        }
      }
      next(null, chunk)
    }
  })

  let read = 0
  let written = 0
  await pump(
    readStream,
    progressStream,
    parse(parseOptions),
    new stream.Transform({
      objectMode: true,
      transform: async (obj, _, next) => {
        if (shouldBeStopped) return next()
        read++
        const transformed = transform(obj)
        if (processingConfig.filter && processingConfig.filter.column && transformed[processingConfig.filter.column] !== processingConfig.filter.value) next()
        else {
          written++
          next(null, transformed)
        }
      }
    }),
    stringify({ header: true, quoted_string: processingConfig.processType !== 'cnam' }),
    writeStream
  )
  writeStream.end()

  if (shouldBeStopped) return
  await log.progress(PROGRESS_TASK, totalBytes, totalBytes)
  const filtered = read - written
  await log.info(`${written.toLocaleString('fr-FR')} lignes transformées${filtered > 0 ? ` (${filtered.toLocaleString('fr-FR')} filtrées sur ${read.toLocaleString('fr-FR')} lues)` : ''}.`)
}

export default process
