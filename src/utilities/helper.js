import * as R from 'ramda'
// Need to do null check
const duplicatePath = R.unless(
  R.isEmpty,
  (path) => {
    const parentPath = R.slice(0, -1)(path)

    return [path, parentPath]
  }
)

const pathLens = R.pipe(
  R.split('.'),
  duplicatePath,
  R.map(R.lensPath)
)

const getFn = R.curry(
  (path, obj) => R.pipe(
    pathLens,
    R.map(R.view(R.__, obj)),
    R.apply(R.bind)
  )(path)
)

const isNotFn = R.complement(R.is)(Function)

export {
  getFn,
  isNotFn
}
