process.env.NODE_ENV = 'test'
const config = require('config')
const assert = require('assert').strict
const transformCSV = require('../')

describe('Hello world processing', () => {
  it('should expose a plugin config schema for super admins', async () => {
    const schema = require('../plugin-config-schema.json')
    assert.ok(schema)
  })

  it('should expose a processing config schema for users', async () => {
    const schema = require('../processing-config-schema.json')
    assert.equal(schema.type, 'object')
  })

  it('should run a task', async function () {
    this.timeout(1000000)

    const testsUtils = await import('@data-fair/lib/processings/tests-utils.js')
    const context = testsUtils.context({
      pluginConfig: {},
      processingConfig: {
        datasetMode: 'create',
        dataset: { title: 'CNAM test' },
        url: 'https://www.data.gouv.fr/fr/datasets/r/1911e468-3748-424b-8fb6-7738bbd8884f',
        processType: 'cnam',
        clearFiles: false
      },
      tmpDir: 'data/'
    }, config, false)
    await transformCSV.run(context)
  })

  // it('should run a task', async function () {
  //   this.timeout(1000000)

  //   const testsUtils = await import('@data-fair/lib/processings/tests-utils.js')
  //   const context = testsUtils.context({
  //     pluginConfig: {},
  //     processingConfig: {
  //       datasetMode: 'create',
  //       dataset: { title: 'Mérimée test' },
  //       url: 'https://www.data.gouv.fr/fr/datasets/r/3a52af4a-f9da-4dcc-8110-b07774dfb3bc',
  //       processType: 'merimee',
  //       clearFiles: false
  //     },
  //     tmpDir: 'data/'
  //   }, config, false)
  //   await transformCSV.run(context)
  // })
})
