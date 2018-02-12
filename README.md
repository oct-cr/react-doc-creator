Generate documentation for React Components based on its PropTypes

## Installation

`$ npm install -save-dev react-doc-creator`

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

It will search for React Components in your `src` folder and write the documentation in a `DOCUMENTATION.md` file

## Demo

* [React Strip Date Picker Documentation](https://github.com/crearlink/react-strip-date-picker/blob/develop/DOCUMENTATION.md)

## Options

```
react-doc-creator [path] ...[options]

path     A component file or directory. Default: src

Options:
   -o FILE, --out FILE   store extracted information in FILE
   -x, --extension       File extensions to consider. Repeat to define multiple extensions. Default:  [js,jsx]
   -e, --exclude         Filename pattern to exclude. Default:  []
   -i, --ignore          Folders to ignore. Default:  [node_modules,__tests__,__mocks__]
   -t, --title [value]   Document title. Default: 'React Components'
```
