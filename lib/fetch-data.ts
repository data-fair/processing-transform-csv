import path from 'path'
import fs from 'fs-extra'
import { promisify } from 'util'
import { execFile as execFileCb } from 'child_process'
import pumpCb from 'pump'
import type { AxiosInstance } from 'axios'
import type { ProcessingContext } from '@data-fair/lib-common-types/processings.js'
import type { ProcessingConfig } from '#types/processingConfig/index.ts'
import { displayBytes } from './utils.ts'

const pump = promisify(pumpCb) as (...streams: unknown[]) => Promise<void>
const execFile = promisify(execFileCb)

type Log = ProcessingContext<ProcessingConfig>['log']

/**
 * Écrit un flux dans un fichier temporaire puis le déplace à sa place finale.
 * Le passage par un `.tmp` synchronisé sur disque évite des fichiers partiels
 * et des bugs de lecture anticipée sur NFS.
 */
const streamToFile = async (filePath: string, fn: (writeStream: fs.WriteStream) => Promise<void>): Promise<void> => {
  await fs.ensureFile(filePath + '.tmp')
  await fn(fs.createWriteStream(filePath + '.tmp'))
  const fd = await fs.open(filePath + '.tmp', 'r')
  await fs.fsync(fd)
  await fs.close(fd)
  await fs.move(filePath + '.tmp', filePath, { overwrite: true })
}

/**
 * Extrait le CSV d'une archive téléchargée.
 *
 * L'archive est dézippée dans un sous-dossier dédié : ainsi l'archive source
 * elle-même (`<type>-source.zip`) n'est jamais candidate au renommage et ne peut
 * pas écraser le fichier extrait — le bug qui cassait la BPE, dont le CSV
 * `BPE25.csv` (en majuscules) était supplanté par le binaire zip. La sélection
 * du fichier de données est insensible à la casse.
 */
const extractCsv = async (zipPath: string, dir: string, processType: string, log: Log): Promise<void> => {
  const extractDir = path.join(dir, processType + '-extract')
  await fs.emptyDir(extractDir)
  await execFile('unzip', ['-o', zipPath, '-d', extractDir])

  const files = await fs.readdir(extractDir)
  const match = files.find(f => f.toLowerCase().startsWith(processType)) ??
    files.find(f => f.toLowerCase().endsWith('.csv'))
  if (!match) {
    throw new Error(`L'archive ne contient aucun fichier exploitable (contenu : ${files.join(', ') || 'vide'}).`)
  }

  await fs.move(path.join(extractDir, match), path.join(dir, processType + '-source.csv'), { overwrite: true })
  await fs.remove(extractDir)
  await log.info(`Fichier extrait de l'archive : ${match}`)
}

export const download = async (processingConfig: ProcessingConfig, dir: string, axios: AxiosInstance, log: Log): Promise<void> => {
  await fs.ensureDir(dir)
  const processType = processingConfig.processType
  const isZip = processingConfig.url.includes('.zip')
  const csvPath = path.join(dir, processType + '-source.csv')
  const downloadPath = isZip ? path.join(dir, processType + '-source.zip') : csvPath

  await log.step('Téléchargement du fichier source')
  await log.info(`Source : ${processingConfig.url}`)

  if (await fs.pathExists(csvPath)) {
    await log.info('Fichier déjà présent, téléchargement ignoré.')
    return
  }

  await streamToFile(downloadPath, async (writeStream) => {
    const res = await axios({ url: processingConfig.url, method: 'GET', responseType: 'stream', maxRedirects: 4 })
    await pump(res.data, writeStream)
  })
  const { size } = await fs.stat(downloadPath)
  await log.info(`Fichier téléchargé (${displayBytes(size)}).`)

  if (isZip) {
    await extractCsv(downloadPath, dir, processType, log)
    await fs.remove(downloadPath)
  }
}
