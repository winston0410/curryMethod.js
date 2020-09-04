const {
  nAry
} = require('../index.js')
const chai = require('chai')
const expect = chai.expect
const R = require('ramda')

describe('nAry()', function () {
  beforeEach(function () {

  })

  it('should curry a nullary method', function () {
    // const exmaple = R.curry(
    //   (id, ...args) => {
    //     console.log(args)
    //   }
    // )
    //
    // exmaple(1)('hellos', 'world')

    // const methodToFunction = (arity, fn) => {
    //   if (arity === 0) return console.log(fn)
    //
    //   const remainingArity = arity - 1
    //   console.log(remainingArity)
    //   return methodToFunction(remainingArity, fn)
    // }

    // methodToFunction(3, 'hello')

    // const curry = (fn, arity = fn.length, ...args) => {
    //   console.log(args)
    //
    //   return arity <= args.length
    //     ? fn(...args) // Run now
    //     : curry.bind(null, fn, arity, ...args) // Add parameter
    // }
    //
    // // EXAMPLES
    // console.log(
    //   curry(Math.pow)(2)(10)
    // ) // 1024
    // curry(Math.min, 3)(10)(50)(2) // 2

    const curryMethods = R.curry(
      (arity, fnName) => {
        const curryRecursion = (...args) => {
          // Arity + 1 = parameters + obj
          if (arity + 1 === args.length) {
            const obj = R.last(args)

            console.log(obj)

            return obj[fnName](...R.init(args))
          }

          return curryRecursion.bind(null, ...args)
        }

        return curryRecursion
      }
    )

    const obj = {
      hello: (x) => (x)

    }

    const test = (a, b) => a

    console.log(
      curryMethods(1, 'hello')('I am a man')(obj)
    )

    // const curryMethods = (arity, fn, ...args) => {
    //   if (arity === args.length) return fn(...args)
    //
    //   return curryMethods.bind(null, arity, fn, ...args)
    // }
  })

  it('should curry a unary method', function () {

  })

  it('should curry a binary method', function () {

  })

  it('should curry a ternary method', function () {

  })
})
