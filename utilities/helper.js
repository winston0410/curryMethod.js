import * as R from 'ramda'

// const duplicateInit = (arr) => {
//   const duplicatedArr = []
//
//   const recursion = (arr, duplicatedArr, timesToRun = arr.length) => {
//     if (timesToRun === 0) return duplicatedArr
//
//     const remainingTimesToRun = timesToRun - 1
//     return recursion(arr, duplicatedArr, remainingTimesToRun)
//   }
//
//   return recursion(arr, duplicatedArr)
// }

const duplicateInit = (arr) => {
  const outputArr = []

  const recursion = (arr, outputArr, timesToRun = arr.length) => {
    // Base case
    if (timesToRun === 0) return outputArr

    const slicedArr = R.slice(0, timesToRun)(arr)
    const appendedArr = [...outputArr, slicedArr]
    const remainingTimesToRun = timesToRun - 1
    return recursion(arr, appendedArr, remainingTimesToRun)
  }

  return recursion(arr, outputArr)
}

const pathLens = R.pipe(
  R.split('.'),
  R.tap(console.log),
  // Recursion like factorial
  R.lensPath
)

const getFn = R.curry(
  (path, obj) => R.pipe(
    pathLens,
    R.view(R.__, obj),
    R.bind(R.__, obj)
  )(path)
)

export {
  getFn
}
