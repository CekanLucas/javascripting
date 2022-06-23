/**
@description A function map that applies a function to each item in an array and collects the results in a new Array
@param {Array} input an arbitrary Array of any type.
@param {Function} operation an arbitrary Function which can be applied to items in `input`
@return {Array} returns same array as `Array#map`

## Expected Output
```js
var nums = [1,2,3,4,5]

// `map` is your exported function
var output = map(nums, function double(item) {
  return item * 2
})

console.log(output) // => [2,4,6,8,10]
```
## Task

Use Array#reduce to implement a simple version of Array#map.

### Links
- [Wikipedia: Reduce(higher-order function)](https://en.wikipedia.org/wiki/Reduce_(higher-order_function))
- [Mozzila Doc: Array - Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

*/
module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce((arr, item) => [...arr, fn.call(thisArg, item)], [])
}

/*
 * No need to implement the optional `thisArg` argument of `Array.prototype.map`, bonus points if you do!
 */
