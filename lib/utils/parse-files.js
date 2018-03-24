const { readFiles } = require('node-dir')
const { parse, resolver } = require('react-docgen')


exports.parseFiles = ({ options, callback }) => {

  const files = []

  console.log(`Searching in: ${options.source}\n`)

  readFiles(
    options.source,
    {
      match: new RegExp(`\\.(?:${options.extensions.join('|')})$`),
      exclude: options.exclude && new RegExp(options.exclude),
      excludeDir: options.ignore,
    },
    (err, content, filename, next) => {
      if (err) {
        throw err
      }

      try {
        const components = parse(content, resolver.findAllExportedComponentDefinitions)

        files.push({ filename, components })
      } catch (e) {
        files.push({ filename, components: [] })
      }

      next()
    },
    err => {
      if (err) {
        console.error(String(err))
        process.exit(1)
        return
      }

      callback(files)
    }
  )

}
