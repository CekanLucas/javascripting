/**
@description 
Given an Array of strings, using Array#reduce to create an object that contains the number of times each string occured in the array
@param {string[]} inputWords array of random strings
@return {{[string]: number}} An object that contains the number of times each string occured in the array

### Example
``` js
var inputWords = [
'Apple',
'Banana',
'Apple',
'Durian',
'Durian',
'Durian']

console.log(countWords(inputWords))

// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }
```

### Links
- [Wikipedia: Reduce](https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
- [Mozzila Doc: Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

*/
module.exports = function countWords(inputWords) {
  return inputWords.reduce((counts, word) => {
    counts[word] ? ++counts[word] : (counts[word] = 1)
    return counts
  }, {})
}

/* CONDITIONS
 * Do not use any for/while loops or Array.forEach
 * Do not create any unnecessary functions e.g. helpers
 */
