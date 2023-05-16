const util = require('util')
const pump = util.promisify(require('pump'))
const exec = util.promisify(require('child_process').exec)

const path = require('path')
const fs = require('fs-extra')

const withStreamableFile = async (filePath, fn) => {
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
      const pathToFile = filePath.split('/')[0]
      await exec(`unzip -o ${filePath} -d ${pathToFile}`)
      if (filePath.includes('bpe')) {
        const files = await fs.readdir(pathToFile)
        for (const file of files) {
          if (file.startsWith('bpe')) {
            await fs.move(`${pathToFile}/${file}`, `${pathToFile}/bpe-source.csv`, { overwrite: true })
          }
        }
      }
      fs.remove(filePath)
    } catch (err) {
      console.log('Impossible d\'extraire l\'archive, le fichier est peut-être déjà extrait')
    }
  }
}

exports.download = async (processingConfig, dir, axios, log) => {
  await fs.ensureDir(dir)
  let filePath
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

exports.clearFiles = async (dir, log) => {
  await log.debug('suppression des anciens fichiers téléchargés')
  await fs.remove(dir)
}
