import { createServer } from 'node:net'

const port = 4000
const address = '127.0.0.1'

const handleDataStream = (socket) => (data) => {
  const text = String(data)
  if (text === 'xispa') {
    socket.end()
  }
  console.log(text)
}

const handleConnection = (socket) => {
  console.log('Someone just connected!')
  socket.on('end', () => console.log('Disconnected!'))
  socket.on('data', handleDataStream(socket))
}

createServer(handleConnection).listen(port, address)

console.log(`Server socket listener at ${address}:${port}`)
