exports.parseComponent = source => {

  source.title = source.displayName

  if (source.description && !source.displayName) {
    source.title = source.description.match(/^(.*)$/m)[0]

    if (source.description.split('\n').length > 1) {
      source.description = source.description.replace(/[\w\W]+?\n+?/, '')
      source.description = source.description.replace(/(\n)/gm, '\n')
    } else {
      source.description = null
    }

  }

  if (source.description) {
    source.description = `${source.description}\n\n`
  }


  if (source.props) {
    Object.keys(source.props).forEach(key => {
      const prop = source.props[key]

      if (prop.defaultValue) {
        if ((/[^\w\s.&:\-+*,!@%$]+/igm).test(prop.defaultValue.value)) {
          prop.defaultValue.value = ''
        }
      }
    })
  }

  return source
}
