/**
@description Implementing a 'curry' function for an arbitrary number of arguments
@param {Function} fn: The function we want to curry
@param {number} [n] Optional number of arguments to curry. If not supplied, `curryN` should use the fn's arity as the value for `n`
@return {type} 


### Example
```js
function add3(one, two, three) {
  return one + two + three
}

var curryC = curryN(add3)
var curryB = curryC(1)
var curryA = curryB(2)
console.log(curryA(3)) // => 6
console.log(curryA(10)) // => 13

console.log(curryN(add3)(1)(2)(3)) // => 6
```

### Links
- [Wikipedia: Currying](https://en.wikipedia.org/wiki/Currying)

*/
function curryN(fn, n = fn.length) {
  return function curry(arg) {
    if( n <= 1) return fn(arg)
    return curryN(fn.bind(null, arg), n - 1)
  }
}

// Tests

function add3(one, two, three) {
  return one + two + three
}

var curryC = curryN(add3)
var curryB = curryC(1)
var curryA = curryB(2)
console.log(curryA(3)) // => 6
console.log(curryA(10)) // => 13

console.log(curryN(add3)(1)(2)(3)) // => 6

/* EXAMPLE curry3 function */
// This is an example implementation of curry3, which curries up to 3 arguments:

function curry3(fun) {
  return function (one) {
    return function (two) {
      return function (three) {
        return fun(one, two, three)
      }
    }
  }
}

// If we were to use this implementation with this sample function:

function abc(one, two, three) {
  return one / two / three
}

// It would work like so:

var curryC = curry3(abc)
var curryB = curryC(6)
var curryA = curryB(3)

console.log(curryA(2)) // => 1

module.exports = curryN

/* CONDITIONS
 * Do not use any for/while loops or Array.forEach
 */

/* Hint
 * You can detect the number of expected arguments to a function (it's arity) by checking a function's .length property
 */
