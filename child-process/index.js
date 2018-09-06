const cp = require('child_process')
const worker = cp.fork('./worker')

worker.on('message', data => {
  console.log(`received: ${data}`)
})

worker.send('1000000000')