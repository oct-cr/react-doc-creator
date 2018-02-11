const fs = require('fs')
const Handlebars = require('handlebars')


exports.parseTemplate = ({ templateData, templateFile }) => {
  Handlebars.registerHelper('inc', value => Number(value) + 1)

  const template = fs.readFileSync(templateFile)

  const compiledTemplate = Handlebars.compile(String(template))

  return compiledTemplate(templateData)
}
