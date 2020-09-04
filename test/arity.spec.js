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

    // const pathLens = R.pipe(
    //   R.split('.'),
    //   R.tap(console.log),
    //   // R.slice(0, layer),
    //   R.tap(console.log),
    //   R.lensPath
    // )
    //
    // // pathLens('john.wick')
    //
    // const getFn = R.curry(
    //   (fnPath, el) => R.pipe(
    //     // R.juxt([pathLens(), pathLens(-1)]),
    //     pathLens,
    //     R.tap(console.log),
    //     R.map(R.view),
    //     R.tap(console.log),
    //     R.map(R.applyTo(el)),
    //     R.tap(console.log),
    //     R.apply(R.bind) // Bind the function's parent to prevent error
    //   )(fnPath)
    // )
    //
    // getFn('john.wick', testObj)

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
    //     R.tap(console.log),
    //     R.map(R.view)
    //     // R.map(R.applyTo(el)),
    //     // R.apply(R.bind) // Bind the function's parent to prevent error
    //   )(fnPath)
    // )

    // getFn('john.wick.is.me', testObj)
  })

  it('should curry a unary method', function () {

  })

  it('should curry a binary method', function () {
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

    const testArr = ['hello', 'world', 'foo', 'bar']
    console.log(
      duplicateInit(testArr)
    )
  })

  it('should curry a ternary method', function () {
    // const testObj = {
    //   john: {
    //     wick: {
    //       is: {
    //         me: (x) => console.log(this)
    //       }
    //     }
    //   }
    // }
    //
    // curryMethod(1, 'john.wick.is.me')('Hello world')(testObj)
  })
})
