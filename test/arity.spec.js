const {
  curryMethod,
  getArg
} = require('../src/index.js')
const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-dom'))
const R = require('ramda')

const jsdom = require('jsdom')
const { JSDOM } = jsdom
const { document } = (new JSDOM('...')).window

describe('curryMethod()', function () {
  let element

  beforeEach(function (done) {
    element = document.createElement('p')

    done()
  })

  it('should curry a nullary method', function () {
    const remove = curryMethod(0, 'remove')
    document.body.append(element)
    remove(element)
    expect(document.body).to.not.contains(element)
  })

  it('should curry a unary method', function () {
    const addClass = curryMethod(1, 'classList.add')
    addClass('test-class')(element)

    expect(element).to.have.class('test-class')
  })

  it('should curry a binary method', function () {
    const setAttribute = curryMethod(2, 'setAttribute')

    // console.log(
    //   R.is(Function, setAttribute)
    // )
    //
    // console.log(
    //   R.is(Function, setAttribute('id'))
    // )
    //
    // console.log(
    //   R.is(Function, setAttribute('id')('unique'))
    // )
    //
    // console.log(
    //   R.is(Function, setAttribute('id')('unique')(element))
    // )

    console.log(
      getArg(0)(setAttribute)('id')('unique')(element)
    )
    setAttribute('id')('unique')(element)
    expect(element).to.have.attr('id', 'unique')
  })
})
