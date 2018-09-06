function heavyOperation(operationTimes) {
  let result = 0
  let max = parseInt(operationTimes)
  let operations = max

  while (operations--) {
    result += Math.random()
    if(operations % (max/10) === 0) {
      process.send(`${operations} operations complete!`)
    }
  }
  return result
}

process.on('message', data => {
  heavyOperation(data)
})