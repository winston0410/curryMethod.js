const {
  curryMethod
} = require('../index.js')
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

  })

  it('should curry a ternary method', function () {

  })
})
