import cluster from 'cluster'

if (cluster.isMaster) {
  console.log('Master node is running...')
  cluster.fork()
} else {
  console.log('Child node is running...')
  console.log('Press CTRL+C to finalize')
}
