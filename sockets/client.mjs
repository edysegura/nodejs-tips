import { Socket } from 'node:net'
import { createInterface } from 'node:readline'

const port = 4000
const address = '127.0.0.1'
const client = new Socket()

const readInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const processLine = (line) => {
  client.write(line)
  if (line === 'xispa') {
    // Promise.resolve().then(process.exit)
    // process.nextTick(process.exit)
    setTimeout(process.exit, 5)
  }
}

const communicationHandler = () => {
  console.log('Connected!')
  readInterface.addListener('line', processLine)
}

client.connect(port, address, communicationHandler)
