// server.mjs
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'

const PORT = 3000

const server = createServer(async (_, response) => {
  try {
    const data = await readFile('./index.html', 'utf8')
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(data)
  } catch (err) {
    response.writeHead(500, { 'Content-Type': 'text/plain' })
    response.end('Internal Server Error\n')
  }
})

// starts a simple http server locally
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

// supported since Node.js v14+
// run with `node server.mjs`
