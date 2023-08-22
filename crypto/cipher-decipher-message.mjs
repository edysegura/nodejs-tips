import crypto from 'crypto'

const algorithm = 'aes-256-gcm'

// generate a secure random key
const key = crypto.randomBytes(32)

// generate a secure random initialization vector
const iv = crypto.randomBytes(16)

// protected data
const message = 'This is a secret message'

// the cipher function
const cipher = crypto.createCipheriv(algorithm, key, iv)

// encrypt the message
let encryptedData = cipher.update(message, 'utf8', 'hex')
encryptedData += cipher.final('hex')

// generate an authentication tag
const tag = cipher.getAuthTag()

console.log('Encrypted message: ' + encryptedData)
console.log('Authentication tag: ' + tag.toString('hex'))

// the decipher function
const decipher = crypto.createDecipheriv(algorithm, key, iv)

// set the authentication tag
decipher.setAuthTag(tag)

let decryptedData = decipher.update(encryptedData, 'hex', 'utf8')
decryptedData += decipher.final('utf8')

console.log('Decrypted message: ' + decryptedData)
