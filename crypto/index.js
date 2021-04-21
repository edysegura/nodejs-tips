import crypto from 'crypto'

// Password-Based Key Derivation Function 2
crypto.pbkdf2('secret', 'salt', 100000, 32, 'sha512', (error, derivedKey) => {
  console.log(derivedKey.toString('hex'))
})
