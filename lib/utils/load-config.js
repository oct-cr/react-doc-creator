const path = require('path')

const Command = require('./command')


const search = [
  'doc-creator.js',
  Command.config
].filter(Boolean)


const template = path.join(__dirname, '..', 'templates', 'markdown.handlebars')

exports.loadConfig = () => (
  {
    search,
    source: Command.args[0] ? Command.args[0] : `${process.cwd()}/lib`,
    extensions: Command.extensions,
    ignore: Command.ignore,
    exclude: Command.exclude,
    template,
    title: Command.title,
    output: Command.output,
  }
)
