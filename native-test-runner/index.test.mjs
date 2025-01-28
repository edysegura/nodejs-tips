import assert from 'node:assert'
import { describe, it } from 'node:test'
import { sum } from './index.mjs'

describe('Sum suite', () => {
  it('should sum two numbers', () => {
    const numberA = 1
    const numberB = 2
    assert.strictEqual(sum(numberA, numberB), 3)
  })
})

// run with `node --test` or `node --test --watch`
// run with `node index.test.mjs` or `node index.test.mjs --watch`
// https://www.youtube.com/watch?v=5UC8NobtuoM
