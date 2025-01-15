const url = 'https://httpbin.org/uuid'
const maxRetries = 3

async function fetchWithRetry(url, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      return response.json()
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${error.message}`)
      if (i === retries - 1) {
        throw new Error('Max retries reached')
      }
    }
  }
}

fetchWithRetry(url, maxRetries)
  .then((data) => console.log('Success:', data))
  .catch((error) => console.error('Error:', error.message))

// fetchWithRetry('https://http.cat/404', maxRetries)
//   .then((data) => console.log('Success:', data))
//   .catch((error) => console.error('Error:', error.message))

// fetchWithRetry('https://http.cat/500', maxRetries)
//   .then((data) => console.log('Success:', data))
//   .catch((error) => console.error('Error:', error.message))
