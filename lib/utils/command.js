const Commander = require('commander')

const pkg = require('../../package.json')


module.exports = (() => {

  const list = val => {
    val = val.replace(/[, ]+/g, ',').trim()
    return val.split(',').filter(value => value.length > 0)
  }

  Commander
    .version(pkg.version)
    .usage('[path] ...[options]')
    .option('-o, --out <file>', 'Target markdown file. Default: \'COMPONENTS.MD\'', 'COMPONENTS.md')
    .option('-x, --extension <items>', 'Include only these file extensions. Default: js,jsx', list, ['js', 'jsx'])
    .option('-i, --ignore <items>', 'Folders to ignore. Default: node_modules,__tests__,__mocks__', list, ['node_modules', '__tests__', '__mocks__'])
    .option('-e, --exclude-patterns <items>', 'Filename patterns to exclude. Default: []', list, [])
    .option('-t, --title [value]', 'Document title. Default: \'React Components\'', 'React Components')
    .parse(process.argv)

  return Commander
})()
