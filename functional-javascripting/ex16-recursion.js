/**
 * @typedef {Array<string>} dependenciesArr
 * @description A array of all unique dependencies and sub-dependencies **sorted alphabetically**
 * @example
 * [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]
 */

/**
@description A recursive function that returns all of the unique dependencies and subdependencies of a module 
@param {type} tree A dependency tree. See below for an example of the structure
@returns {dependenciesArr} A array of all unique dependencies and sub-dependencies **sorted alphabetically**


### Example tree
```json
var loremIpsum = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
      "optimist": {
        "version": "0.3.7",
        "dependencies": {
          "wordwrap": {
            "version": "0.0.2"
          }
        }
      },
      "inflection": {
        "version": "1.2.6"
      }
    }
  }

 getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]
```

### Task

Implement a recursive function that **returns all of the unique dependencies**, and **sub-dependencies of a module**, *sorted alphabetically*. Dependencies should be printed as `dependency@version e.g. []()`

Multiple versions of the same module are allowed, but duplicates modules of the same version should be removed

### Notes 

- See the validation which was very tricky here
- Object.hasOwnProperty to go around property undefined errors
- Set to to get unique values
- Array.sort() to sort alphabetically
- default values to create recursion

### Links
- [Mozila Doc: Objects - keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

*/
function getDependencies(tree, results = []) {
  const subtree =
    tree && tree.hasOwnProperty('dependencies') ? tree.dependencies : tree
  if (subtree === undefined || subtree.version) return []

  const dependencies = Object.keys(subtree)

  dependencies.forEach((name) => {
    const dependency = subtree[name]
    const str = `${name}@${dependency.version}`
    results.push(str)

    if (dependency.dependencies) {
      getDependencies(dependency.dependencies, results) // recursion here
    } else return
  })

  const set = new Set(results) // set is used to keep unique values

  // return unique set sorted alphabetically
  return [...set].sort((a, b) => (a > b ? 1 : -1))
}

const exampleTree = {
  name: 'lorem-ipsum',
  version: '0.1.1',
  dependencies: {
    optimist: {
      version: '0.3.7',
      dependencies: {
        wordwrap: {
          version: '0.0.2',
        },
      },
    },
    inflection: {
      version: '1.2.6',
      dependencies: {
        wordwrap: {
          version: '0.0.2', // ignores duplicate values of same version
        },
      },
    },
  },
}
const badExample = {
  version: '0.3.5',
}
const topExample = {
  'map-async': {
    version: '0.1.1',
  },
  'tuple-stream': {
    version: '0.0.2',
  },
}

getDependencies(badExample) // => []
getDependencies(topExample) // [ 'map-async@0.1.1', 'tuple-stream@0.0.2' ]
getDependencies(exampleTree) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]

module.exports = getDependencies

/* CONDITIONS
 * Do not use any for/while loops
 */
