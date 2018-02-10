const Table = require('cli-table')
const Colors = require('colors')


const table = new Table({
  head: [
    Colors.cyan('Source File'),
    Colors.cyan('Components Found')
  ]
})


exports.printTable = files => {
  files.forEach(file => {
    table.push([
      file.filename,
      file.components.length || Colors.yellow('--')
    ])
  })

  console.log(`${table.toString()}\n`)
}
