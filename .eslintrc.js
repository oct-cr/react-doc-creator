// http://eslint.org/docs/rules/

module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "rules": {
    // Possible Errors
    "no-console": "off",

    // Best Practices
    "block-scoped-var": "warn",
    "curly": "warn",
    "no-else-return": "warn",
    "no-unused-expressions": "warn",
    "radix": "error",

    // Strict Mode
    "strict": ["warn", "never"],

    // Variables
    "no-shadow": "warn",
    "no-use-before-define": ["error", { "functions": false }],
    "no-unused-vars": "warn",

    // Node.js and CommonJS
    "global-require": "warn",
    "no-mixed-requires": ["warn", { "grouping": true, "allowCall": false }],

    // Stylistic Issues
    "array-bracket-spacing": "warn",
    "block-spacing": "warn",
    "brace-style": "warn",
    "camelcase": "warn",
    "comma-spacing": "warn",
    "eol-last": "warn",
    "func-call-spacing": "warn",
    "indent": [2, 2, { "SwitchCase": 1 }],
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "linebreak-style": ["warn", "unix"],
    "max-depth": "warn",
    "no-trailing-spaces": "warn",
    "no-whitespace-before-property": "warn",
    "padded-blocks": ["warn", { "classes": "always" }],
    "quotes": ["warn", "single"],
    "semi": ["warn", "never"],

    // ECMAScript 6
    "arrow-parens": ["warn", "as-needed"],
    "arrow-spacing": "warn",
    "no-duplicate-imports": "warn",
    "no-useless-rename": "warn",
    "no-var": "warn",
    "prefer-const": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "rest-spread-spacing": "warn",
    "sort-imports": "warn",
    "template-curly-spacing": ["warn", "never"]
  }
}