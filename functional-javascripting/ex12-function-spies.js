/**
@description Override a specified method of an object with new functionality while still maintaining all of the old behaviour

Create a spy that keeps track of how many times a function is called

@param {Object} target an object containing the method `method`
@param {String} method a string with the name of the method on `target` to spy on
@return {Object} returns object with count property: how many times a function is called

## Spy Explanation 
1. *initialise* count from last time or 0
2. **overide method** with same behaviour 
3. but tracking count property 
4. return this object ***pass by reference*** not value


### Example
```js
var spy = Spy(console, 'error')

console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log(spy.count) // 3
```
*/

module.exports = function Spy(target, method) {
  Spy.count = Spy.count || 0

  const fn = target[method]
  target[method] = (...args) => {
    fn.call(fn, ...args)
    ++Spy.count
  }

  return Spy
}

/* CONDITIONS
 * Do not use any for/while loops or Array#forEach
 * Do not create any unnecessary functions e.g. helpers
 */
