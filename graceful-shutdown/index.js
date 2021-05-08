function gracefulShutdown(exitSignal) {
  process.on(exitSignal, () => {
      // disconnect from database
      console.log('\nBye bye!', exitSignal)
      process.exit(0);
  })
}

const exitSignals = ['SIGINT', 'SIGTERM', 'SIGQUIT']
exitSignals.forEach(gracefulShutdown)

console.log('Press CTRL+C to exit this application!')
setTimeout(() => console.log('Time is over!'), 1000 * 60)