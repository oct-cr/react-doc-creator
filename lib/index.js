#!/usr/bin/env node

const Colors = require('colors')

const { loadConfig } = require('./utils/load-config')
const { parseComponent } = require('./utils/parse-component')
const { parseFiles } = require('./utils/parse-files')
const { parseTemplate } = require('./utils/parse-template')

const { printTable } = require('./utils/print-table')
const { writeFile } = require('./utils/write-file')

const { version } = require('../package.json')

const options = loadConfig()

console.log(Colors.white(`\n\nREACT DOC GENERATOR v${version}\n`))


parseFiles({
  options,
  callback: files => {
    printTable(files)

    const filesWithComponents = files
      .filter(file => file.components.length)
      .map(file => ({
        filename: file.filename,
        components: file.components.map(component => parseComponent(component))
      }))

    if (!filesWithComponents.length) {
      console.log('No components found')
      console.log(Colors.yellow('No file generated'))
      process.exit()
    }

    const templateData = {
      files,
      documentTitle: options.title,
      generator: `Documentation generated using **React Doc Creator v${version}**`
    }

    const parsedTemplate = parseTemplate({
      templateData,
      templateFile: options.template
    })

    writeFile({ parsedTemplate, options })
  }
})
