const path = require('path')
const fs = require('fs-extra')
const Iconv = require('iconv').Iconv
const iconv = new Iconv('iso-8859-1', 'utf-8')
const parse = require('csv-parse/lib/sync')
const parserOpts = { delimiter: '\t', quote: '' }
const stringify = require('csv-stringify/lib/sync')

exports.process = async (dir, log) => {
  const writeStream = fs.createWriteStream(path.join(dir, 'transformed.csv'), { flags: 'w' })
  const filePath = path.join(dir, 'downloaded.csv')
  const content = await fs.readFile(filePath)
  const lines = parse(iconv.convert(content), parserOpts)
  const header = lines.shift()

  writeStream.write(stringify(Object.values(codes)))
  writeStream.end()
}
