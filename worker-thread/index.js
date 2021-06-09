const { Worker } = require('worker_threads')

const worker = new Worker('./worker.js')

worker.on('message', data => {
  console.log(`${data.number}th fibonacci number: ${data.fibonacci}`)
})

worker.on('error', error => {
  console.error('Error: ', error)
})

worker.on('exit', exitCode => {
  console.log('Exit code: ', exitCode)
})

worker.postMessage({ number: 40 })
worker.postMessage({ number: 21 })
// worker.terminate()

console.log('Executed in the parent thread')
console.log('--> Press CTRL+C to exit <--')
