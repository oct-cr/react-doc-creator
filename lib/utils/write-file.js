const fs = require('fs')


exports.writeFile = ({ parsedTemplate, path }) => {
  const output = fs.createWriteStream(path)

  output.write(parsedTemplate)
}
