'use strict'


const test = require('node:test')
const assert = require('node:assert')
const add = require('../src/index.js')

test('add sum numbers', () => {
    //arrange
    const a = 2
    const b = 3

    //act
    const result = add(a, b)
    
    //assert
    assert.strictEqual(result, 5)
})
