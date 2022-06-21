/**
@typedef {Object} Message
@property {string} message
@example { message: 'Esse id amet quis eu esse aute officia ipsum.'}
@description return an array containing the messages themselves of **less than 50 characters long**, without their containing object 
@param {Message[]} messages an Array of 10 to 100 random objects
@return {string[]} An array of message strings of less than 50 characters

### Resources
- [Mozzilla Docs: Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Mozzilla Docs: Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*/

module.exports = function getShortMessages(messages) {
  return messages
    .map((messageObj) => messageObj.message)
    .filter((message) => message.length < 50)
}

/* CONDITIONS
- Only use array function methods
- Do not use any for/while loops or `Array.forEach`
- Do not create any unnecessary functions e.g. helpers
*/
