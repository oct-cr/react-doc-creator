# React PropTypes Example

## MyComponent

This is how the React PropTypes Example https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes is rendered:

Property | Type | Default value | Description
:--- | :--- | :--- | :---
`optionalArray`|array||
`optionalBool`|bool||
`optionalFunc`|func||
`optionalNumber`|number||
`optionalObject`|object||
`optionalString`|string||
`optionalSymbol`|symbol||
`optionalNode`|node||Anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
`optionalElement`|element||A React element.
`optionalMessage`|&lt;Promise&gt;||You can also declare that a prop is an instance of a class. This uses JS&#x27;s instanceof operator.
`optionalEnum`|enum||You can ensure that your prop is limited to specific values by treating it as an enum.
`optionalUnion`|string \| number \| Promise||An object that could be one of many types
`optionalArrayOf`|&lt;number&gt;[]||An array of a certain type
`optionalObjectOf`|objectOf||An object with property values of a certain type
`optionalObjectWithShape`|shape||An object taking on a particular shape
`requiredFunc`|func|_required_|You can chain any of the above with &#x60;isRequired&#x60; to make sure a warning is shown if the prop isn&#x27;t provided.
`requiredAny`|any|_required_|A value of any data type
`customProp`|custom||
`customArrayProp`|&lt;custom&gt;[]||

<sub>Source: **examples/React-PropTypes.js**</sub>

-----

<sub>Documentation generated using **React Doc Creator v0.0.7**</sub>
