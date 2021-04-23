import debug from 'debug'

// take a look at package.json NPM scripts to check how it works
const log1 = debug('log:one')
const log2 = debug('log:two')

console.log('This is the default console.log')
log1('This is the log one configuration')
log2('This is the log two configuration')