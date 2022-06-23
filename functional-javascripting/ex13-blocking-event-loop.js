/**
@description 
@param {Function} operation operation to be performed
@param {number} num number of times `operation is to be performed`
@return {type} description

# Blocking Event Loop

Modify the recursive `repeat` function provided in the boilerplate, such that it does not block the event loop (i.e. Timers and IO handlers can fire).  This necessarily requires `repeat` to be **asynchronous**

A timeout is queued to fire after 100 milliseconds, which will print the results of the test and exit the process. repeat should release control of the event loop to allow the timeout to interrupt before all of the operations complete.

Try to perform as many operations as you can before the timeout fires!

## Explanation 
`setTimeout` is a asynchronous method so even though delay is 0 the code becomes asyncronous and non blocking

*/
function repeat(operation, num) {
  setTimeout(() => {
    if (num <= 0) return
    operation()
    repeat(operation, --num)
  }, 0)
}

module.exports = repeat

/* CONDITIONS
 * Do not use any for/while loops or Array.forEach
 * Do not create any unnecessary functions e.g. helpers
 */
