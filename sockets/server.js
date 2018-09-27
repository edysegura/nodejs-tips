const net = require('net')

const port = 4000
const address = '127.0.0.1'

const handleDataStream = socket => data => {
  const text = String(data)
  if (text === 'xispa') {
    socket.end()
  }
  console.log(text)
}

const handleConnection = socket => {
  console.log('Someone just connected!')
  socket.on('end', () => console.log('Desconnected'))
  socket.on('data', handleDataStream(socket))
}

net.createServer(handleConnection)
  .listen(port, address)
