/**
@description This function implement a logging function that allows you to namespace messages
@param {string} namespace a String to prepend to each message passed to the returned function
@return {Function} return a function that can be called later this function returns void because `console.log` means no return value

## Task

- **Use Function.bind**
- Make sure all arguments passed to the returned logging function are printed.
- **Print the output to the console directly**

## Example 

```js
// example
var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info
```

### Links
- [Mozilla Doc: Global Objects - Functions - bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

*/

// const logger = (namespace) => (...args) => console.log(namespace, ...args)
module.exports = (namespace) => console.log.bind(console, namespace)


/* CONDITIONS
 * Use Function#bind
 */
