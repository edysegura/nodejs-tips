process.on('unhandledRejection', (reason, promise) => {
  console.log(
    `App exiting due to an unhandled promise: ${promise} and reason: ${reason}`
  )
  // lets throw the error and let the uncaughtException handle below handle it
  throw reason
})

process.on('uncaughtException', (error) => {
  console.log(`App exiting due to an uncaught exception: ${error}`)
  process.exit(1)
})

x.y

