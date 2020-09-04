const {
  curryMethod
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
const R = require('ramda')

describe('curryMethod()', function () {
  beforeEach(function () {

  })

  it('should curry a nullary method', function () {
    const testObj = {
      john: {
        wick: {
          check (x) {
            console.log(this)
          },
          is: {
            me (x) {
              console.log(this)
            }
          }
        }
      }
    }

    testObj.john.wick.check()
    testObj.john.wick.is.me()

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
    //
    // const pathLens = R.pipe(
    //   R.split('.'),
    //   duplicateInit,
    //   R.tap(console.log),
    //   R.map(R.lensPath),
    //   R.tap(console.log)
    //   // Recursion like factorial
    // )
    //
    // const getFn = R.curry(
    //   (path, obj) => R.pipe(
    //     pathLens,
    //     R.map(R.view(R.__, obj)),
    //     R.tap(console.log)
    //     // R.map(R.bind(R.__, obj))
    //     // R.bind(R.__, obj)
    //   )(path)
    // )

    // getFn('john.wick.is.me', testObj)

    // Jacky version

    // const pathLens = (layer = Infinity) => R.pipe(
    //   R.split('.'),
    //   R.slice(0, layer),
    //   R.tap(console.log),
    //   R.lensPath
    // )
    //
    // const getFn = R.curry(
    //   (fnPath, el) => R.pipe(
    //     R.juxt([pathLens(), pathLens(-1)]),
    //     R.map(R.view),
    //     R.tap(console.log), // Array
    //     R.map(R.applyTo(el)),
    //     R.tap(console.log),
    //     R.apply(R.bind) // Bind the function's parent to prevent error
    //   )(fnPath)
    // )
    //
    // getFn('john.wick.is.me', testObj)
  })

  it('should curry a unary method', function () {

  })

  it('should curry a binary method', function () {
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
    //
    // const testArr = ['hello', 'world', 'foo', 'bar']
    // console.log(
    //   duplicateInit(testArr)
    // )
  })

  it('should curry a ternary method', function () {
    const testObj = {
      john: {
        wick: {
          is: {
            me: (x) => console.log(this)
          }
        }
      }
    }
    //
    // curryMethod(1, 'john.wick.is.me')('Hello world')(testObj)
  })
})
