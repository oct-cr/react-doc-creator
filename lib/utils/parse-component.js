function parseUnionProp(prop) {
  return prop.type.value
    .map(value => value.name === 'instanceOf' ? value.value : value.name)
    .join(' \\| ')
}


exports.parseComponent = component => {

  component.title = component.displayName

  if (component.description && !component.displayName) {
    component.title = component.description.match(/^(.*)$/m)[0]

    if (component.description.split('\n').length > 1) {
      component.description = component.description.replace(/[\w\W]+?\n+?/, '')
      component.description = component.description.replace(/(\n)/gm, '\n')
    } else {
      component.description = null
    }

  }

  if (component.description) {
    component.description = `${component.description}\n\n`
  }

  if (!component.props) {
    return component
  }

  Object.keys(component.props).forEach(key => {
    const prop = component.props[key]

    if ((prop.defaultValue) && ((/[^\w\s.&:\-+*,!@%$]+/igm).test(prop.defaultValue.value))) {
      prop.defaultValue.value = ''
    }

    if (prop.type.name === 'union') {
      prop.type.name = parseUnionProp(prop)
    }
  })

  return component
}
