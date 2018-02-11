const fs = require('fs')
const Handlebars = require('handlebars')

const { version } = require('../../package.json')


exports.writeFile = ({ files, options }) => {

  Handlebars.registerHelper('inc', value => Number(value) + 1)

  const template = Handlebars.compile(`${fs.readFileSync(options.template)}`)

  const templateData = {
    files,
    documentTitle: options.title,
    generator: `Documentation generated using **React Doc Creator v${version}**`
  }

  const parsedTemplate = template(templateData)

  const output = fs.createWriteStream(options.output)
  output.write(parsedTemplate)

}
