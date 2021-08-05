import os from 'os'

console.log('Platform: ', os.platform())
console.log('Release: ', os.release())
console.log('CPU Architecture: ', os.arch())
console.log('CPUs: ', os.cpus().length)
console.log('Hostname: ', os.hostname())
console.log('User Info: ', os.userInfo())
