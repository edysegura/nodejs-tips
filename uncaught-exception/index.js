process.on('unhandledRejection', (reason) => {
  console.log(
    `App exiting due to an unhandled promise, reason: ${reason}`,
  )
  // lets throw the error and let the uncaughtException handle below handle it
  throw reason
})

process.on('uncaughtException', (error) => {
  console.log(`App exiting due to an uncaught exception: ${error}`)
  process.exit(1)
})

function asyncAction() {
  return new Promise((_, reject) => {
    reject('Error from promise')
  })
}

// x.y

asyncAction()
