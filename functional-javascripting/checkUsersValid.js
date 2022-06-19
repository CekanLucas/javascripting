/**
@description Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users

### Example

```js
var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }]

var testAllValid = checkUsersValid(goodUsers)

testAllValid([{ id: 2 }, { id: 1 }]) // => true

testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]) // => false
```

You only need to check that the ids match.
- [Mozzila Doc: Array.every](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Mozzila Doc: Array.some](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

@typedef {{id: number}[]} listOfUsers
@param {listOfUsers} goodUsers A id list of valid users

*/

function checkUsersValid(goodUsers) {
  /**
   * @param {listOfUsers} submittedUsers
   * @return {boolean} `true` if `submittedUsers` are all from `goodUsers` and `false` if otherwise
   */
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every((submittedUser) =>
      goodUsers.some((goodUser) => submittedUser.id === goodUser.id),
    )
  }
}

module.exports = checkUsersValid

/* CONDITIONS
 * Do not use any for/while loops or Array.forEach
 * Do not create any unnecessary functions e.g. helpers
 */
