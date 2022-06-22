/**
@description returns number of arguments passed to it which have a property `quack` 
@param {} arguments You will be passed 0-20 arguments. Each argument could be of any type with any properties. Some of these items will have a 'quack' property
@return {number} number of objects with the property quack
# Duck Typing
JavaScript implements *duck typing*. **Duck typing is a style of dynamic typing in which an object's methods and properties determine the valid semantics, rather than its inheritance from a particular class or implementation of a specific interface**. The name of the concept refers to the duck test, attributed to James Whitcomb Riley, which may be phrased as follows:

> "When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck"

In JavaScript, in order to write robust programs we sometimes need to check an object conforms to the type that we need.

We can use `Object#hasOwnProperty` to detect if an object *has* a property defined on itself *(i.e. not inherited from its prototype)*: 

```js
var duck = {
  quack: function() {
    console.log('quack')
  }
}

duck.hasOwnProperty('quack') // => true

var object = {quack: true}

Object.getPrototypeOf(object) === Object.prototype // => true
object.hasOwnProperty('quack')                     // => true
// .hasOwnProperty comes from the Object prototype

// create an object with 'null' prototype.
var object = Object.create(null)
object.quack = function() {
  console.log('quack')
}

Object.getPrototypeOf(object) === Object.prototype // => false
Object.getPrototypeOf(object) === null             // => true

object.hasOwnProperty('quack')
// => TypeError: Object object has no method 'hasOwnProperty'

// the first argument to call becomes the value of `this`
// the rest of the arguments are passed to the function as per
Object.prototype.hasOwnProperty.call(object, 'quack') // => true
```

### Links
- [Mozzila Doc: Global Objects - Function - call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Mozzila Doc: Global Objects - Object - hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [Mozzila Doc: Global Objects - Array - slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Array-like)
- [Mozzila Doc: Opererators - in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
- [Mozzila Doc: Functions and function scoper - arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments)

*/
function duckCount(...args) {
  return [...args].filter((obj) =>
    Object.prototype.hasOwnProperty.call(obj, 'quack'),
  ).length
}

//example
var notDuck = Object.create({ quack: true })
var duck = { quack: true }
console.log(
  duckCount(duck, notDuck), // 1
)

module.exports = duckCount

/* CONDITIONS
 * Do not use any for/while loops or Array#forEach
 * Do not create any counter/accumulator variables
 * Do not create any unnecessary functions e.g. helpers
 */
