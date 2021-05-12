import os from 'os'
import crypto from 'crypto'

process.env.UV_THREADPOOL_SIZE = 2

console.log('CPUs: ', os.cpus().length)
console.log('Thread Pool: ', process.env.UV_THREADPOOL_SIZE)

function generateHash(id) {
  crypto.pbkdf2(String(id), 'salt', 100000, 32, 'sha512', (_, derivedKey) => {
    console.log(id, derivedKey.toString('hex'))
  })
}

generateHash(1)
generateHash(2)
generateHash(3)
generateHash(4)
generateHash(5)
generateHash(6)
generateHash(7)
generateHash(8)
