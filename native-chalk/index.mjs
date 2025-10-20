import { styleText } from 'node:util'

console.log(styleText('green', 'Successfully!'))
console.log(styleText(['bold', 'red'], 'Something went wrong!'))
