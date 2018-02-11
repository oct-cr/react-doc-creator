const fs = require('fs')


exports.writeFile = ({ parsedTemplate, options }) => {
  const output = fs.createWriteStream(options.output)
  output.write(parsedTemplate)

  console.log(`Documentation written in: ${options.output}`)
}
