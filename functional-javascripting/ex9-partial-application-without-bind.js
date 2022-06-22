/**
@description This function fixes the first argument to console.log
@param {string} namespace a String to prepend to each message passed to the returned function
@return {Function} reutrn a function that can be called later this function returns void becuase `console.log` means no return value

# Partial applications
***Partial application allows you to create new functions from existing functions***, while fixing some number of arguments. After setting the arguments to be partially applied, you get a new function ready to take the rest of the arguments and perhaps execute the original function.

> **More formally:** Partial application refers to the process of fixing a number of arguments to a function, producing another function of smaller arity.

As an example, say we have a function add, that takes 2 arguments and adds them together:

```js    
function add(x, y) {
  return x + y
}

add(10, 20) // => 30
```    

Now, pretend we have a function `partiallyApply`
`partiallyApply` takes a function, and some arguments to *partially apply*

Here we *partially apply* the first parameter, `x`, of our `add` function:

 ```js   
var addTen = partiallyApply(add, 10) // fix `x` to 10
 ```   

`addTen` is a new function that takes the y parameter of `add`. `add` has not yet been called!

Once we pass the argument for y, we can execute the original `add` function:

 ```js   
addTen(20) // => 30
addTen(100) // => 110
addTen(0) // => 10

// etc
  ```  

All of the above examples are same as calling `add(10, y)`, where `y` was supplied in the call to the appropriately named `addTen`

## Task

Use partial application to create a function that fixes the first argument to `console.log`  *i.e. Implement a logging function that prepends a namespace string to its output*

Your implementation should take a namespace String and return a function that prints messages to the console with the namespace prepended.

You should use **Function#apply** to implement the partial application.

Make sure all arguments passed to the returned logging function are printed.

 **Print the output to the console directly**

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
- [Wikipedia: Partial Application](https://en.wikipedia.org/wiki/Partial_application)
- [Mozzila Doc: Global Objects - Functions - apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

*/

const logger = (namespace) => (...args) => console.log(namespace, ...args)

module.exports = logger

/* CONDITIONS
 * Do not use Function#bind
 * Use Function#apply
 */
