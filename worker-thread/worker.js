const { parentPort, workerData } = require('worker_threads')

parentPort.postMessage(fibonacci(workerData.number))

function fibonacci(number) {
    if (number <= 1) {
        return number
    }
    return fibonacci(number - 1) + fibonacci(number - 2)
}

console.log('Executed in the child thread')
