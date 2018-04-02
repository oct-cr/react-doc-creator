exports.parseComponent = originalComponent => {

  const component = {
    title: originalComponent.displayName,
    description: originalComponent.description,
    props: []
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
      type: getParsedProp(originalProp),
      default: (originalProp.defaultValue && originalProp.defaultValue.value) ? originalProp.defaultValue.value : null
    }


    if ((/[^\w\s.&:\-+*,!@%$]+/igm).test(prop.default)) {
      prop.default = ''
    }

    return prop

  })

}


function getParsedProp(prop) {
  if (!prop.type) {
    return null
  }

  switch (prop.type.name) {
    case 'arrayOf':
      return `<${prop.type.value.name}>[]`
    case 'enum':
      return parseEnumProp(prop.type.value)
    case 'instanceOf':
      return `<${prop.type.value}>`
    case 'union':
      return parseUnionProp(prop.type.value)
    default:
      return prop.type.name
  }
}


function parseEnumProp(values) {
  return values
    .map(value => value.value)
    .join(' \\| ')
}


function parseUnionProp(values) {
  return values
    .map(value => value.name === 'instanceOf' ? value.value : value.name)
    .join(' \\| ')
}
