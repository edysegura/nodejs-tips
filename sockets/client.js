const net = require('net')
const readline = require('readline')

const port = 4000
const address = '127.0.0.1'
const client = new net.Socket()

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function communicationHandler() {
  console.log('Connected')
  readInterface.addListener('line', line => client.write(line))
}

client.connect(
  port,
  address,
  communicationHandler
)