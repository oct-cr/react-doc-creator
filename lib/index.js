#!/usr/bin/env node

const Colors = require('colors/safe')

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

    const components = []

    files
      .filter(file => file.components.length)
      .forEach(file =>
        file.components.map(component =>
          components.push(Object.assign(
            { filename: file.filename },
            parseComponent(component)
          ))
        )
      )

    console.log(`Total Components Found: ${components.length}`)

    if (!components.length) {
      console.log(Colors.yellow('No file generated'))
      process.exit()
    }

    const templateData = {
      components,
      documentTitle: options.title,
      generator: `Documentation generated using **React Doc Creator v${version}**`
    }

    const parsedTemplate = parseTemplate({
      templateData,
      templateFile: options.template
    })

    writeFile({ parsedTemplate, path: options.output })

    console.log(`Documentation written in: ${options.output}`)

  }
})
