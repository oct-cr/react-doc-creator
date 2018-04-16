exports.enum = values =>
  values
    .map(value => value.value)
    .join(' \\| ')


exports.union = values =>
  values
    .map(value => value.name === 'instanceOf' ? value.value : value.name)
    .join(' \\| ')
