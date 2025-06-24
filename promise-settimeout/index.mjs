import { setTimeout } from 'node:timers/promises'

console.log(`sleeping...`)
await setTimeout(1000)
console.log(`done sleeping!`)
