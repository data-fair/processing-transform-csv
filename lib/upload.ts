import path from 'path'
import fs from 'fs-extra'
import { promisify } from 'util'
import FormData from 'form-data'
import type { AxiosInstance } from 'axios'
import type { ProcessingContext } from '@data-fair/lib-common-types/processings.js'
import type { ProcessingConfig } from '#types/processingConfig/index.ts'

export default async (
  processingConfig: ProcessingConfig,
  processingId: string,
  tmpDir: string,
  axios: AxiosInstance,
  log: ProcessingContext<ProcessingConfig>['log'],
  patchConfig: ProcessingContext<ProcessingConfig>['patchConfig']
): Promise<void> => {
  const formData = new FormData()
  formData.append('title', processingConfig.dataset?.title)
  formData.append('extras', JSON.stringify({ processingId }))
  const filename = processingConfig.processType + '-transformed.csv'
  formData.append('file', fs.createReadStream(path.join(tmpDir, filename)), { filename })

  // Resolve schema/extensions relative to this module (lib/), so the check is
  // independent of the process cwd. Only sent in create mode, iso to 0.6.0.
  const schemaFile = path.join(import.meta.dirname, 'schemas', processingConfig.processType + '.ts')
  if (fs.existsSync(schemaFile) && processingConfig.datasetMode === 'create') {
    const schema = (await import('./schemas/' + processingConfig.processType + '.ts')).default
    formData.append('schema', JSON.stringify(schema))
  }
  const extensionsFile = path.join(import.meta.dirname, 'extensions', processingConfig.processType + '.ts')
  if (fs.existsSync(extensionsFile) && processingConfig.datasetMode === 'create') {
    const extensions = (await import('./extensions/' + processingConfig.processType + '.ts')).default
    formData.append('extensions', JSON.stringify(extensions))
  }

  const getLength = promisify(formData.getLength).bind(formData)

  try {
    const dataset = (await axios({
      method: 'post',
      url: 'api/v1/datasets/' + (processingConfig.dataset?.id || ''),
      data: formData,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      headers: { ...formData.getHeaders(), 'content-length': await getLength() }
    })).data
    await log.info(`jeu de donnée ${processingConfig.datasetMode === 'update' ? 'mis à jour' : 'créé'}, id="${dataset.id}", title="${dataset.title}"`)
    if (processingConfig.datasetMode === 'create') {
      await patchConfig({ datasetMode: 'update', dataset: { id: dataset.id, title: dataset.title } })
    }
  } catch (err) {
    console.log(JSON.stringify(err, null, 2))
  }
}
