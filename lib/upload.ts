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

  // Resolve schema relative to this module (lib/), so the check is independent
  // of the process cwd. Only sent in create mode, iso to 0.6.0.
  const schemaFile = path.join(import.meta.dirname, 'schemas', processingConfig.processType + '.ts')
  if (fs.existsSync(schemaFile) && processingConfig.datasetMode === 'create') {
    const schema = (await import('./schemas/' + processingConfig.processType + '.ts')).default
    formData.append('schema', JSON.stringify(schema))
  }

  const getLength = promisify(formData.getLength).bind(formData)

  await log.step('Publication du jeu de données')
  try {
    const dataset = (await axios({
      method: 'post',
      url: 'api/v1/datasets/' + (processingConfig.dataset?.id || ''),
      data: formData,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      headers: { ...formData.getHeaders(), 'content-length': await getLength() }
    })).data
    await log.info(`Jeu de données ${processingConfig.datasetMode === 'update' ? 'mis à jour' : 'créé'} : ${dataset.title} (${dataset.id}).`)
    if (processingConfig.datasetMode === 'create') {
      await patchConfig({ datasetMode: 'update', dataset: { id: dataset.id, title: dataset.title } })
    }
  } catch (err: any) {
    // Ne jamais avaler l'erreur : sinon le traitement se termine « au vert »
    // sans avoir rien publié. L'axios du service rejette déjà une erreur au
    // message propre (« 409 - … ») ; on partage juste le corps renvoyé par Data
    // Fair en `extra`, puis on relaie l'erreur pour faire échouer le run.
    await log.error('Échec de la publication du jeu de données.', err.data)
    throw err
  }
}
