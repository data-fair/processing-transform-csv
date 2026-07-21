import path from 'path'
import fs from 'fs-extra'
import { promisify } from 'util'
import { execFile as execFileCb } from 'child_process'
import pumpCb from 'pump'
import type { AxiosInstance } from 'axios'
import type { ProcessingContext } from '@data-fair/lib-common-types/processings.js'
import type { ProcessingConfig } from '#types/processingConfig/index.ts'

const pump = promisify(pumpCb) as (...streams: unknown[]) => Promise<void>
const execFile = promisify(execFileCb)

let processType = ''

const withStreamableFile = async (filePath: string, fn: (writeStream: fs.WriteStream) => Promise<void>): Promise<void> => {
  // creating empty file before streaming seems to fix some weird bugs with NFS
  await fs.ensureFile(filePath + '.tmp')
  await fn(fs.createWriteStream(filePath + '.tmp'))
  // Try to prevent weird bug with NFS by forcing syncing file before reading it
  const fd = await fs.open(filePath + '.tmp', 'r')
  await fs.fsync(fd)
  await fs.close(fd)
  // write in tmp file then move it for a safer operation that doesn't create partial files
  await fs.move(filePath + '.tmp', filePath, { overwrite: true })
  if (filePath.includes('.zip')) {
    try {
      const pathToFile = filePath.split('/' + processType + '-source.zip')[0]
      await execFile('unzip', ['-o', filePath, '-d', pathToFile])
      if (filePath.includes(processType)) {
        const files = await fs.readdir(pathToFile)
        for (const file of files) {
          if (file.startsWith(processType)) {
            await fs.move(`${pathToFile}/${file}`, `${pathToFile}/${processType}-source.csv`, { overwrite: true })
          }
        }
      }
      fs.remove(filePath)
    } catch (err) {
      console.log('Impossible d\'extraire l\'archive, le fichier est peut-être déjà extrait')
    }
  }
}

export const download = async (processingConfig: ProcessingConfig, dir: string, axios: AxiosInstance, log: ProcessingContext<ProcessingConfig>['log']): Promise<void> => {
  await fs.ensureDir(dir)
  let filePath
  processType = processingConfig.processType
  if (processingConfig.url.includes('.zip')) {
    filePath = path.join(dir, processingConfig.processType + '-source.zip')
  } else {
    filePath = path.join(dir, processingConfig.processType + '-source.csv')
  }
  if (await fs.pathExists(filePath)) {
    log.info(`le fichier ${filePath} a déjà été téléchargé`)
  } else {
    log.info(`téléchargement du fichier ${filePath}`)
    await withStreamableFile(filePath, async (writeStream) => {
      const res = await axios({ url: processingConfig.url, method: 'GET', responseType: 'stream', maxRedirects: 4 })
      await log.info(`téléchargement du fichier ${filePath} terminé`)
      await pump(res.data, writeStream)
      await log.info(`écriture du fichier ${filePath} terminé`)
    })
  }
}

export const clearFiles = async (dir: string, log: ProcessingContext<ProcessingConfig>['log']): Promise<void> => {
  await log.debug('suppression des anciens fichiers téléchargés')
  await fs.remove(dir)
}
