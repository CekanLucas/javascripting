/** 
A function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.

  * @param {function} operation - A Function, takes no arguments, returns no useful value.
  * @param {number} num - the number of times to call `operation`
*/

// Now working with recursion
module.exports = function repeat(operation, num) {
  if(num!==0) repeat(operation, --num)
  else operation() // else keyword optional here for readability
  return 
}

/* 

A higher-order function is a function that does at least one of the following:
    * Take one or more functions as an input
    * Output a function

All other functions are first order functions.

Unlike many other languages with imperative features, JavaScript allows you to utilize higher-order functions because it has "first-class functions". This means functions can be treated just like any other value in JavaScript: just like Strings or Numbers, Function values can be stored as variables, properties on objects or passed to other functions as arguments. Function values are actually Objects (inheriting from Function.prototype) so you can even add properties and store values on them, just like any regular Object.

The key difference between Functions and other value types in JavaScript is the call syntax: if a reference to a function is followed by parenthesis and some optional comma-separated values: someFunctionValue(arg1, arg2, etc), then the function body will be executed with the supplied arguments (if any).

*/
