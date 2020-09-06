import * as R from 'ramda'

import {
  getFn
} from './utilities/helper.js'

const curryMethod = R.curry(
  (arity, path) => {
    const recursion = (...args) => {
      // Arity + 1 = parameters + obj
      if (arity + 1 === args.length) {
        const obj = R.last(args)
        const fn = getFn(path, obj)
        return fn(...R.init(args))
      }

      return recursion.bind(null, ...args)
    }

    return recursion
  }
)

export {
  curryMethod
}
