Generate documentation for React Components based on its PropTypes

It parses the files using React Docgen. Please refer to [its documentation](https://github.com/reactjs/react-docgen#guidelines-for-default-resolvers-and-handlers) for details.

Output sample: [React Strip Date Picker Documentation](https://github.com/crearlink/react-strip-date-picker/blob/develop/DOCUMENTATION.md)

## Installation

`$ npm install --save-dev react-doc-creator`

## Usage

In your `package.json` insert:

```
{
  // ...
  "scripts": {
    "build:doc": "react-doc-creator"
  }
  // ...
}
```

To run it:

`$ npm run build:doc`

It will search for React Components in your `src` folder and write the documentation in a `COMPONENTS.md` file

## Demo

* [React Strip Date Picker Documentation](https://github.com/crearlink/react-strip-date-picker/blob/develop/DOCUMENTATION.md)

## Options

```
react-doc-creator [path] ...[options]

  path     A component file or directory. Default: src

  Options:
    -o, --out <file>         Target markdown file. (default: COMPONENTS.md)
    -x, --extension <items>  Include only these file extensions. (default: js,jsx)
    -i, --ignore <items>     Folders to ignore. (default: node_modules,__tests__,__mocks__)
    -e, --exclude [regexp]   Filename pattern to exclude.
    -t, --title [value]      Document title. (default: React Components)
```
