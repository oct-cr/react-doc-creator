exports.parseComponent = originalComponent => {

  const component = {
    title: originalComponent.displayName,
    description: originalComponent.description,
    props: []
  }

  if (component.description) {
    component.description = `${component.description}\n\n`
  }

  if (!originalComponent.props) {
    return component
  }

  component.props = parseProps(originalComponent.props)

  return component
}


function parseProps(originalProps) {

  return Object.keys(originalProps).map(key => {

    const originalProp = originalProps[key]

    const prop = {
      name: key,
      description: originalProp.description,
      required: originalProp.required,
      type: (originalProp.type) ? originalProp.type.name : null,
      default: (originalProp.defaultValue && originalProp.defaultValue.value) ? originalProp.defaultValue.value : null
    }


    if ((/[^\w\s.&:\-+*,!@%$]+/igm).test(prop.default)) {
      prop.default = ''
    }

    if (prop.type === 'union') {
      prop.type = parseUnionProp(originalProp.type.value)
    }

    return prop

  })

}


function parseUnionProp(prop) {
  return prop
    .map(value => value.name === 'instanceOf' ? value.value : value.name)
    .join(' \\| ')
}
