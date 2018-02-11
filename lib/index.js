#!/usr/bin/env node

const Colors = require('colors')

const { parseFiles } = require('./utils/parse-files')
const { printTable } = require('./utils/print-table')
const { writeFile } = require('./utils/write-file')

const { version } = require('../package.json')

const { loadConfig } = require('./utils/load-config')
const options = loadConfig()

console.log(Colors.white(`\n\nREACT DOC GENERATOR v${version}\n`))


parseFiles({
  options,
  callback: files => {
    printTable(files)

    const filesWithComponents = files.filter(file => file.components.length)

    if (!filesWithComponents.length) {
      console.log('No components found')
      console.log(Colors.yellow('No file generated'))
      process.exit()
    }

    writeFile({ files: filesWithComponents, options })
  }
})
