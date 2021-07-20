// process.env.UV_THREADPOOL_SIZE = 1

import os from 'os'
import crypto from 'crypto'

console.log('CPUs: ', os.cpus().length)
console.log('Thread Pool: ', process.env.UV_THREADPOOL_SIZE)

function generateHash(id) {
  crypto.pbkdf2(String(id), 'salt', 100000, 512, 'sha512', (_, derivedKey) => {
    console.log(id, derivedKey.toString('hex').substring(0,32))
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
