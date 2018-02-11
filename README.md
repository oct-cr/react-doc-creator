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
