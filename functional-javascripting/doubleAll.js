/** 
## Converts below to Array.map
```js
function doubleAll(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}
```
@description Double all numbers in a array
@param {number[]} numbers An Array of 0 to 20 Integers between 0 and 9
@returns {number[]} An array of numbers that were doubled
*/
const doubleAll = (numbers) => numbers.map((number) => 2 * number)

module.exports = doubleAll

/* 
## Conditions

  * Your solution should use Array.prototype.map()
  * Do not use any for/while loops or Array.prototype.forEach.
  * Do not create any unnecessary functions e.g. helpers.

## Resources

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
