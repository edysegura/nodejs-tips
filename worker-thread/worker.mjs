import { parentPort } from 'worker_threads'

parentPort.on('message', data => {
  const message = buildMessage(data)
  parentPort.postMessage(message)
})

function buildMessage(data) {
  const message = {
    number: data.number,
    fibonacci: fibonacci(data.number)
  }
  return message
}

function fibonacci(number) {
  if (number <= 1) {
    return number
  }
  return fibonacci(number - 1) + fibonacci(number - 2)
}

console.log('Worker instantiated!')