const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
const [,tokenPayload] = token.split('.')
const parsedPayload = Buffer.from(tokenPayload, 'base64').toString()

console.log(parsedPayload) // {"sub":"1234567890","name":"John Doe","iat":1516239022}