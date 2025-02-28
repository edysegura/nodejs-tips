import assert from 'node:assert'
import { describe, it } from 'node:test'

describe('Base64 encoding/decoding', () => {
  const originalText = 'someone@email.com'
  const expectedEncoding = 'c29tZW9uZUBlbWFpbC5jb20='
  let encodedText

  it('should correctly encode string to base64', () => {
    encodedText = Buffer.from(originalText).toString('base64')
    assert.strictEqual(encodedText, expectedEncoding)
    assert.strictEqual(encodedText.length, 24)
  })

  it('should correctly decode base64 to original string', () => {
    const decodedText = Buffer.from(encodedText, 'base64').toString('utf-8')
    assert.strictEqual(decodedText, originalText)
    assert.strictEqual(decodedText.length, 17)
  })
})
