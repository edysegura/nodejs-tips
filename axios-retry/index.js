import axios from 'axios'
import axiosRetry from 'axios-retry'

axiosRetry(axios, {
  retries: 3,
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`)
    return retryCount * 2000
  },
  retryCondition: (error) => {
    return error.response.status === 503
  }
})

try {
  const response = await axios.get('https://httpstat.us/503')
  console.log(response.data)
} catch (error) {
  console.log(error.message)
  console.log(error.response.data)
}
