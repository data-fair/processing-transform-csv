const fs = require('fs-extra')
const path = require('path')
const util = require('util')
const FormData = require('form-data')
const { download } = require('./lib/fetch-data')
const { process } = require('./lib/process')
// const datasetSchema = require('./resources/schema.json')

// main execution method
exports.run = async ({ pluginConfig, processingConfig, processingId, dir, tmpDir, axios, log, patchConfig, ws }) => {
  // await clearFiles(dir, log)
  await download(processingConfig, tmpDir, axios, log)
  await process(processingConfig, tmpDir, log)

  const formData = new FormData()
  // formData.append('id', processingConfig.dataset.id)
  formData.append('title', processingConfig.dataset.title)
  // formData.append('schema', JSON.stringify(datasetSchema))
  formData.append('extras', JSON.stringify({ processingId }))
  const filename = processingConfig.processType + '-transformed.csv'
  formData.append('file', fs.createReadStream(path.join(tmpDir, filename)), { filename })
  formData.getLength = util.promisify(formData.getLength)

  try {
    const dataset = (await axios({
      method: 'post',
      url: 'api/v1/datasets/' + (processingConfig.dataset.id || ''),
      data: formData,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      headers: { ...formData.getHeaders(), 'content-length': await formData.getLength() }
    })).data
    await log.info(`jeu de donnée ${processingConfig.datasetMode === 'update' ? 'mis à jour' : 'créé'}, id="${dataset.id}", title="${dataset.title}"`)
    if (processingConfig.datasetMode === 'create') {
      await patchConfig({ datasetMode: 'update', dataset: { id: dataset.id, title: dataset.title } })
    }
  } catch (err) {
    console.log(JSON.stringify(err, null, 2))
  }
}
