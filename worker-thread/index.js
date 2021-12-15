import { Worker } from 'worker_threads'

const worker = new Worker('./worker.js')

worker.on('message', (data) => {
  console.log(`${data.number}th fibonacci number is ${data.fibonacci}`)
})

worker.on('error', (error) => {
  console.error('Something went wrong!', error.message)
})

worker.on('exit', (exitCode) => {
  console.log('Exit code: ', exitCode)
})

worker.postMessage({ number: 40 })
worker.postMessage({ number: 21 })
worker.postMessage({ number: 42 })
worker.postMessage(null) // it will throws an exception

console.log('Executed in the parent thread')
console.log('--> Press CTRL+C to exit <--')
