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
        dataset: { title: 'Mérimée test' },
        url: 'https://www.data.gouv.fr/fr/datasets/r/3a52af4a-f9da-4dcc-8110-b07774dfb3bc',
        processType: 'merimee',
        clearFiles: false
      },
      tmpDir: 'data/'
    }, config, false)
    await transformCSV.run(context)
  })
  /*
  it('should run a task', async function () {
    this.timeout(1000000)

    const testsUtils = await import('@data-fair/lib/processings/tests-utils.js')
    const context = testsUtils.context({
      pluginConfig: {},
      processingConfig: {
        datasetMode: 'create',
        dataset: { title: 'Base Permanente des Equipements 56' },
        url: 'https://www.insee.fr/fr/statistiques/fichier/3568638/bpe21_ensemble_xy_csv.zip',
        processType: 'bpe',
        filter: {
          column: 'DEP',
          value: '56'
        },
        clearFiles: false
      },
      tmpDir: 'data/'
    }, config, false)
    await transformCSV.run(context)
  })
  it('should run a task', async function () {
    this.timeout(60000)

    const testsUtils = await import('@data-fair/lib/processings/tests-utils.js')
    const context = testsUtils.context({
      pluginConfig: {},
      processingConfig: {
        datasetMode: 'create',
        dataset: { title: 'COG Changements' },
        url: 'https://www.insee.fr/fr/statistiques/fichier/6800675/v_mvtcommune_2023.csv',
        processType: 'cog',
        clearFiles: false

      },
      tmpDir: 'data/'
    }, config, false)
    await transformCSV.run(context)
  })
  it('should run a task', async function () {
    this.timeout(60000)

    const testsUtils = await import('@data-fair/lib/processings/tests-utils.js')
    const context = testsUtils.context({
      pluginConfig: {},
      processingConfig: {
        datasetMode: 'create',
        dataset: { title: 'ICPE test' },
        url: 'https://mapsref.brgm.fr/wxs/georisques/georisques_dl?&service=wfs&version=2.0.0&request=getfeature&typename=InstallationsClassees&outputformat=csv',
        processType: 'icpe',
        clearFiles: false

      },
      tmpDir: 'data/'
    }, config, false)
    await transformCSV.run(context)
    assert.equal(context.processingConfig.datasetMode, 'update')
    assert.equal(context.processingConfig.dataset.title, 'ICPE test')
  })
  it('should run a task', async function () {
    this.timeout(60000)

    const testsUtils = await import('@data-fair/lib/processings/tests-utils.js')
    const context = testsUtils.context({
      pluginConfig: {},
      processingConfig: {
        datasetMode: 'create',
        dataset: { title: 'RNIC test' },
        url: 'https://www.data.gouv.fr/fr/datasets/r/3ea8e2c3-0038-464a-b17e-cd5c91f65ce2',
        processType: 'rnic',
        clearFiles: false,
        filter: {
          column: 'code_postal',
          value: '56000'
        }
      },
      tmpDir: 'data/'
    }, config, false)
    await transformCSV.run(context)
    assert.equal(context.processingConfig.datasetMode, 'update')
    assert.equal(context.processingConfig.dataset.title, 'RNIC test')
  })
  */
})
