const { readFiles } = require('node-dir')
const { parse, resolver } = require('react-docgen')


exports.parseFiles = ({ options, callback }) => {

  const files = []

  printOptions(options)

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
        const components = replaceNewlinesInPropDescriptions(
          parse(content, resolver.findAllExportedComponentDefinitions)
        )

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


function printOptions(options) {
  console.log(`Searching in: ${options.source}`)

  const optionsFeedback = getOptionsFeedback(options)
  if (optionsFeedback) {
    console.log(optionsFeedback)
  }
}


function getOptionsFeedback(options) {
  const sentences = []

  if (options.ignore.length) {
    sentences.push(`Ignore directories: ${options.ignore.join(',')}`)
  }

  if (options.exclude) {
    sentences.push(`Exclude files pattern: ${options.exclude}`)
  }

  return sentences.join(' - ')
}

function replaceNewlinesInPropDescriptions(components) {
  return components.map(comp => {
    if (!comp.props) {
      return comp
    }
    for (const propName of Object.keys(comp.props)) {
      comp.props[propName].description =
        (comp.props[propName].description || '').replace(/\n/g, '<br />')
    }
    return comp
  })
}
