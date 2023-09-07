import crypto from 'crypto' // dropped on node v14.17.0

// Password-Based Key Derivation Function 2
crypto.pbkdf2('secret', 'salt', 100000, 32, 'sha512', (error, derivedKey) => {
  console.log('1', derivedKey.toString('hex'))
})

const hash = crypto.createHash('sha256').update('secret').digest('hex')
console.log('2', hash)
