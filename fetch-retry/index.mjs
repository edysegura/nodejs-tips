async function fetchWithRetry({ url, maxAttempts = 3 }) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(
          `Request failed with status ${response.status} - ${response.statusText}`,
        )
      }
      return response.json()
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${error.message}`)
      if (i === maxAttempts - 1) {
        throw new Error('Max retries reached')
      }
    }
  }
}

fetchWithRetry({ url: 'https://httpstat.us/408', maxAttempts: 3 })
  .then((data) => console.log('Success:', data))
  .catch((error) => console.error('Error:', error.message))

// fetchWithRetry('https://http.cat/404', maxRetries)
//   .then((data) => console.log('Success:', data))
//   .catch((error) => console.error('Error:', error.message))

// fetchWithRetry('https://http.cat/500', maxRetries)
//   .then((data) => console.log('Success:', data))
//   .catch((error) => console.error('Error:', error.message))
