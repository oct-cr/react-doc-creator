const fs = require('fs')
const Handlebars = require('handlebars')

const { loadConfig } = require('./load-config')
const { version } = require('../../package.json')

const config = loadConfig()


exports.writeFile = files => {

  const output = fs.createWriteStream(config.output)

  Handlebars.registerHelper('inc', value => Number(value) + 1)
  const template = Handlebars.compile(`${fs.readFileSync(config.template)}`)

  const templateData = {
    files,
    documentTitle: config.title,
    generator: `Documentation generated using **React Doc Creator v${version}**`
  }

  output.write(template(templateData))

}
