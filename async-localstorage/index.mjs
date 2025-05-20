import { AsyncLocalStorage } from 'async_hooks'

// Create a new instance of AsyncLocalStorage
const storage = new AsyncLocalStorage()

// Example async function that uses the storage
async function processRequest(requestId, userData) {
  return storage.run({ requestId, userData }, async () => {
    step1()
    step2()
    return 'Processing complete'
  })
}

// Helper functions that access the storage context
async function step1() {
  const context = storage.getStore()
  console.log('Step 1:', context)
  await new Promise((resolve) => setTimeout(resolve, 200))
}

async function step2() {
  const context = storage.getStore()
  console.log('Step 2:', context)
  await new Promise((resolve) => setTimeout(resolve, 100))
}

// Example usage
async function main() {
  try {
    const result = await processRequest('123', { name: 'John' })
    console.log('Result:', result)
  } catch (error) {
    console.error('Error:', error)
  }
}

main()
