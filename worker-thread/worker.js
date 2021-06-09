import { parentPort } from 'worker_threads'

parentPort.on('message', data => {
  const result = {
    number: data.number,
    fibonacci: fibonacci(data.number)
  }
  parentPort.postMessage(result)
  console.log('Executed in the child thread')
})

function fibonacci(number) {
  if (number <= 1) {
    return number
  }
  return fibonacci(number - 1) + fibonacci(number - 2)
}
