const { readFiles } = require('node-dir')
const { parse, resolver } = require('react-docgen')

const { parseComponent } = require('./parse-component')


exports.parseFiles = ({ options, callback }) => {

  const files = []

  console.log(`Searching in: ${options.source}\n`)

  readFiles(
    options.source,
    {
      match: new RegExp(`\\.(?:${options.extensions.join('|')})$`),
      exclude: options.excludePatterns,
      excludeDir: options.ignore,
    },
    (err, content, filename, next) => {
      if (err) {
        throw err
      }

      try {
        const sourceComponents = parse(content, resolver.findAllExportedComponentDefinitions)

        const components = sourceComponents.map(component => parseComponent(component))

        files.push({ filename, components })
      } catch (e) {
        files.push({ filename, components: [] })
      }

      next()
    },
    err => {
      if (err) {
        console.error(err)
        return
      }

      callback(files)
    }
  )

}
