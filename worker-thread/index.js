const { Worker } = require('worker_threads')

const number = 40
const data = { workerData: { number }}

const worker = new Worker('./worker.js', data)

worker.once('message', result => {
  console.log(`${number}th fibonacci number: ${result}`)
})

worker.on('error', error => {
  console.error('Error: ', error)
})

worker.on('exit', exitCode => {
  console.log('Exit code: ', exitCode)
})

console.log('Executed in the parent thread')
