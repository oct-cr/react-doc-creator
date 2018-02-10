const { readFiles } = require('node-dir')
const { parse, resolver } = require('react-docgen')

const { loadConfig } = require('./load-config')
const { parseComponent } = require('./parse-component')


const config = loadConfig()


exports.parseFiles = callback => {

  const files = []

  console.log(`Searching in: ${config.source}\n`)

  readFiles(
    config.source,
    {
      match: new RegExp(`\\.(?:${config.extensions.join('|')})$`),
      exclude: config.excludePatterns,
      excludeDir: config.ignore,
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
