const pump = require('util').promisify(require('pump'))

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
}

exports.download = async (processingConfig, dir, axios, log) => {
  await fs.ensureDir(dir)
  const filePath = path.join(dir, 'downloaded.csv')
  if (await fs.pathExists(filePath)) {
    log.info(`le fichier ${filePath} a déjà été téléchargé`)
  } else {
    log.info(`téléchargement du fichier ${filePath}`)
    await withStreamableFile(filePath, async (writeStream) => {
      const res = await axios({ url: processingConfig.url, method: 'GET', responseType: 'stream' })
      await pump(res.data, writeStream)
    })
  }
}

exports.clearFiles = async (dir, log) => {
  await log.debug('suppression des anciens fichiers téléchargés')
  await fs.remove(dir)
}
