const assert = require('assert')

const propParsers = require('../lib/utils/prop-parsers')
const componentMockProps = require('./component.mock.json')[0].props


describe('propParsers', () => {

  it('enum', () => {
    const result = propParsers.enum(componentMockProps.optionalEnum.type.value)
    assert.equal(result, '\'News\' \\| \'Photos\'')
  })

  it('union', () => {
    const result = propParsers.union(componentMockProps.optionalUnion.type.value)
    assert.equal(result, 'string \\| number \\| Promise')
  })

  it('shape', () => {
    const result = propParsers.shape(componentMockProps.optionalObjectWithShape.type.value)
    assert.equal(result, '{ color: string, fontSize: number }')
  })

})
