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
    .option('-o, --out <file>', 'Target markdown file.', 'COMPONENTS.md')
    .option('-x, --extension <items>', 'Include only these file extensions.', list, ['js', 'jsx'])
    .option('-i, --ignore <items>', 'Folders to ignore.', list, ['node_modules', '__tests__', '__mocks__'])
    .option('-e, --exclude [regexp]', 'Filename pattern to exclude.', '')
    .option('-t, --title [value]', 'Document title.', 'React Components')
    .parse(process.argv)

  return Commander
})()
