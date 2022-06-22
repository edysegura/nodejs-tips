const base64 = Buffer.from('someone@email.com').toString('base64')
console.log({ base64 })

const decodeBase64 = Buffer.from(base64, 'base64').toString('utf-8')
console.log({ decodeBase64 })