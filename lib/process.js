const path = require('path')
const fs = require('fs-extra')
// const Iconv = require('iconv').Iconv
// const iconv = new Iconv('iso-8859-1', 'utf-8')
// const parse = require('csv-parse/lib/sync')
// const parserOpts = { delimiter: '\t', quote: '' }
// const stringify = require('csv-stringify/lib/sync')
const pump = require('util').promisify(require('pump'))
const csv = require('csv')
const stream = require('stream')

exports.process = async (processingConfig, dir, log) => {
  const readStream = fs.createReadStream(path.join(dir, processingConfig.processType + '-source.csv'), { objectMode: true })
  const writeStream = fs.createWriteStream(path.join(dir, processingConfig.processType + '-transformed.csv'), { flags: 'w' })
  const tranform = require(`./transforms/${processingConfig.processType}.js`)
  let delimiter = ','
  if (processingConfig.processType === 'bpe' || processingConfig.processType === 'merimee') {
    delimiter = ';'
  }
  await pump(
    readStream,
    csv.parse({ columns: true, delimiter: delimiter, bom: true }),
    new stream.Transform({
      objectMode: true,
      transform: async (obj, _, next) => {
        const transformed = tranform(obj)
        if (processingConfig.filter && processingConfig.filter.column && transformed[processingConfig.filter.column] !== processingConfig.filter.value) next()
        else next(null, transformed)
      }
    }),
    csv.stringify({ header: true, quoted_string: true }),
    writeStream
  )
  // const filePath =
  // const content = await fs.readFile(filePath)
  // const lines = parse(iconv.convert(content), parserOpts)
  // const header = lines.shift()

  // writeStream.write(stringify(Object.values(codes)))
  writeStream.end()
}
