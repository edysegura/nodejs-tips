import os from 'os'

process.env.UV_THREADPOOL_SIZE = os.cpus().length

console.log('CPUs: ', os.cpus().length)
console.log('Thread Pool: ', process.env.UV_THREADPOOL_SIZE)