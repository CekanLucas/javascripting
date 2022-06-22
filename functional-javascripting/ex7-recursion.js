/**
@description  Creating Array#reduce using recursion same program as last excercise
Given an Array of strings, using Array#reduce to create an object that contains the number of times each string occured in the array
@param {Array} arr An Array to reduce over
@param {Function} fn Function to use as the reduction step. Like regular Array#reduce, this function must be passed previousValue, currentValue, index and the array we're iterating over
@param {Array} arr Initial value of the reduction. Unlike Array#reduce, this value is required (and you may assume it will always be supplied)
@return {any} 

# Recursion

Recursion is a fundamental programming concept which can lead to elegant and efficient solutions to algorithmic problems. In fact, recursion is so powerful, all iterating behaviour can be defined using recursive functions. You will find recursion indispensable when iterating over nested data structures.

A recursive function is a function which calls itself. For example, this recursive function will take an array of words, and return an array of those words, uppercased.

```js
function toUpperArray(items) {         
  if (!items.length) return []             // end condition
  var head = items[0]                      // item to operate on
  head = head.toUpperCase()                // perform action
  var tail = items.slice(1)                // next
  return [head].concat(toUpperArray(tail)) // recursive step
}

toUpperArray(['hello', 'world']) // => ['HELLO', 'WORLD']
```
### Links
- [Wikipedia: Recursion](https://en.wikipedia.org/wiki/Recursion)
- [Mozzila Doc: Recursion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
*/
const reduce = (arr, fn, initial) => {
  if (arr.length <= 0) return initial
  const curr = arr.shift()
  return reduce(arr, fn, fn(initial, curr, 0, arr))
}

// Example
console.log(
  'value:',
  reduce(
    [0, 1, 2, 3],
    function (prev, curr, index, arr) {
      return prev + curr
    },
    0,
  ),
)

module.exports = reduce

/* CONDITIONS
 * Do not use any for/while loops
 * Do not use any Array methods like Array#map or Array#reduce
 */
