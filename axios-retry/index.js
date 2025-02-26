import axios from 'axios'
import axiosRetry from 'axios-retry'

axiosRetry(axios, {
  retries: 3,
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`)
    return retryCount * 2000
  },
  retryCondition: (error) => {
    // HTTP status code is 408 (Request Timeout)
    return error.response.status === 408
  },
})

try {
  const response = await axios.get('https://httpstat.us/408')
  console.log(response.data)
} catch (error) {
  console.log(error.message)
  console.log(error.response.data)
}
