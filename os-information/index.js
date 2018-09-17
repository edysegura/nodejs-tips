const os = require('os')

console.log('Platform: ', os.platform())
console.log('Release: ', os.release())
console.log('CPU Architecutre: ', os.arch())
console.log('CPUs: ', os.cpus().length)
console.log('Hostmanme: ', os.hostname())
console.log('User Info: ', os.userInfo())