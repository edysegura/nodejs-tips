import assert from 'node:assert'
import { describe, it } from 'node:test'

describe('Test suite', () => {
  it('that 1 is equal 1', () => {
    assert.strictEqual(1, 1)
  })
})

// run with `node --test` or `node --test --watch`
// run with `node index.test.mjs` or `node index.test.mjs --watch`
// https://www.youtube.com/watch?v=5UC8NobtuoM
