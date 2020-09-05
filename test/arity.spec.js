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
            console.log(x)
          },
          is: {
            me (x) {
              console.log(this)
            }
          }
        }
      }
    }

    // testObj.john.wick.check()
    // testObj.john.wick.is.me()

    curryMethod(1, 'john.wick.check')('Hello', testObj)
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

    // const g = R.unless(
    //   R.isEmpty,
    //   arr => [arr, ...g(R.init(arr))]
    // )
    //
    // const testArr = ['hello', 'world', 'foo', 'bar']
    // console.log(
    //   g(testArr)
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
