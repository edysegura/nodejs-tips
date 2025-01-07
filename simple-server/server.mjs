// server.mjs
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'

const server = createServer(async (_, res) => {
  try {
    const data = await readFile('./index.html', 'utf8')
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(data)
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('Internal Server Error\n')
  }
})

// starts a simple http server locally on port 3000
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})

// supported since Node.js v14+
// run with `node server.mjs`
