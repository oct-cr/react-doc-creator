const propParsers = require('./prop-parsers')


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
      return propParsers.enum(prop.type.value)
    case 'instanceOf':
      return `<${prop.type.value}>`
    case 'union':
      return propParsers.union(prop.type.value)
    case 'shape':
      return propParsers.shape(prop.type.value)
    default:
      return prop.type.name
  }
}
