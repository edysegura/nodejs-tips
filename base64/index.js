const encodeBase64 = Buffer.from('someone@email.com').toString('base64')
console.log({ encodeBase64 })

const decodeBase64 = Buffer.from(encodeBase64, 'base64').toString('utf-8')
console.log({ decodeBase64 })