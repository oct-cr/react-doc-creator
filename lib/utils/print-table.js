const Table = require('cli-table')
const Colors = require('colors')


exports.printTable = files => {
  const table = new Table({
    head: [
      Colors.cyan('Source File'),
      Colors.cyan('Components Found')
    ]
  })

  files.forEach(file => {
    table.push([
      file.filename,
      file.components.length || Colors.white('-')
    ])
  })

  console.log(`${table.toString()}\n`)
}
