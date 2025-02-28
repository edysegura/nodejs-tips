import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import bcryptjs from 'bcryptjs'

describe('bcryptjs password hashing', async () => {
  const password = 'your secret password'
  const salt = 8

  it('should generate a valid hash', async () => {
    const hash = await bcryptjs.hash(password, salt)
    assert.ok(hash.startsWith('$2a$'))
  })

  it('should verify correct password', async () => {
    const hash = await bcryptjs.hash(password, salt)
    const isMatch = await bcryptjs.compare(password, hash)
    assert.equal(isMatch, true)
  })

  it('should reject incorrect password', async () => {
    const hash = await bcryptjs.hash(password, salt)
    const isMatch = await bcryptjs.compare('wrong password', hash)
    assert.equal(isMatch, false)
  })
})
