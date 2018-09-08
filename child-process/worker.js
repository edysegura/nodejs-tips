function heavyOperation(operationTimes) {
  let result = 0
  let opTimes = parseInt(operationTimes)

  while (opTimes--) {
    result += Math.random()
  }

  return result
}

process.on('message', data => {
  let result = heavyOperation(data)
  process.send(result)
})
