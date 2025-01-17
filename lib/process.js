const path = require('path')
const fs = require('fs-extra')
const pump = require('util').promisify(require('pump'))
const csv = require('csv')
const stream = require('stream')

exports.process = async (processingConfig, dir, log) => {
  const readStream = fs.createReadStream(path.join(dir, processingConfig.processType + '-source.csv'), { objectMode: true })
  const writeStream = fs.createWriteStream(path.join(dir, processingConfig.processType + '-transformed.csv'), { flags: 'w' })
  const tranform = require(`./transforms/${processingConfig.processType}.js`)
  let delimiter = ','
  if (['bpe', 'merimee', 'cnam'].includes(processingConfig.processType)) {
    delimiter = ';'
  }
  const parseOptions = { columns: true, delimiter: delimiter, bom: true }
  if (processingConfig.processType === 'cnam') {
    parseOptions.quote = null
    const headers = require('./headers/cnam.json')
    parseOptions.columns = headers
  }
  await pump(
    readStream,
    csv.parse(parseOptions),
    new stream.Transform({
      objectMode: true,
      transform: async (obj, _, next) => {
        const transformed = tranform(obj)
        if (processingConfig.filter && processingConfig.filter.column && transformed[processingConfig.filter.column] !== processingConfig.filter.value) next()
        else next(null, transformed)
      }
    }),
    csv.stringify({ header: true, quoted_string: processingConfig.processType !== 'cnam' }),
    writeStream
  )
  writeStream.end()
}
