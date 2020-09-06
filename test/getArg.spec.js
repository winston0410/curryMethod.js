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

describe('getArg()', function () {
  let element, firstArg, secondArg, setAttribute

  beforeEach(function (done) {
    element = document.createElement('p')
    firstArg = 'id'
    secondArg = 'test'
    setAttribute = curryMethod(2, 'setAttribute')

    done()
  })

  describe('if the indice parameter is 0', function () {
    it('should return the first argument', function () {
      const returnedValue = getArg(0, setAttribute)(firstArg)(secondArg)(element)
      expect(returnedValue).to.equal(firstArg)
    })
  })

  describe('if the indice parameter is 1', function () {
    it('should return the second argument', function () {
      const returnedValue = getArg(1, setAttribute)(firstArg)(secondArg)(element)
      expect(returnedValue).to.equal(secondArg)
    })
  })
})
