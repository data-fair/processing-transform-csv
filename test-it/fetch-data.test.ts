import { strict as assert } from 'node:assert'
import { describe, it, after } from 'node:test'
import { execFileSync } from 'node:child_process'
import fs from 'fs-extra'
import os from 'node:os'
import path from 'node:path'
import { extractCsv } from '../lib/fetch-data.ts'

const tmpDirs: string[] = []
const makeTmpDir = async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'transform-csv-test-'))
  tmpDirs.push(dir)
  return dir
}
after(async () => {
  for (const dir of tmpDirs) await fs.remove(dir)
})

const log: any = { info: async () => {} }

describe('extractCsv', () => {
  it('ignores the symbolic links of the archive', async () => {
    const srcDir = await makeTmpDir()
    await fs.symlink('/etc/hostname', path.join(srcDir, 'rnic-link.csv'))
    await fs.writeFile(path.join(srcDir, 'data.csv'), 'a\n1\n')
    const dir = await makeTmpDir()
    const zipFile = path.join(dir, 'rnic-source.zip')
    execFileSync('zip', ['-q', '-y', zipFile, 'rnic-link.csv', 'data.csv'], { cwd: srcDir })
    await extractCsv(zipFile, dir, 'rnic', log)
    const csvPath = path.join(dir, 'rnic-source.csv')
    assert.ok(!(await fs.lstat(csvPath)).isSymbolicLink())
    assert.equal(await fs.readFile(csvPath, 'utf8'), 'a\n1\n')
  })
})
