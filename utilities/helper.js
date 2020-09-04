import * as R from 'ramda'

// const duplicateInit = (arr) => {
//   const outputArr = []
//
//   const recursion = (arr, outputArr, timesToRun = arr.length) => {
//     // Base case
//     if (timesToRun === 0) return outputArr
//
//     const slicedArr = R.slice(0, timesToRun)(arr)
//     const appendedArr = [...outputArr, slicedArr]
//     const remainingTimesToRun = timesToRun - 1
//     return recursion(arr, appendedArr, remainingTimesToRun)
//   }
//
//   return recursion(arr, outputArr)
// }

const getParentObj = R.pipe(
  // Turn an array into two array with slice(1)
  // [ ['hello', 'world'], ['hello'] ]
)

const pathLens = R.pipe(
  R.split('.'),
  getParentObj,
  R.map(R.lensPath)
)

const getFn = R.curry(
  (path, obj) => R.pipe(
    pathLens,
    R.map(R.view(R.__, obj)),
    R.map(R.bind(R.__, obj))
  )(path)
)

export {
  getFn
}
