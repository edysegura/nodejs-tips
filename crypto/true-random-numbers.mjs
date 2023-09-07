import { getRandomValues } from 'crypto' // dropped on node v14.17.0

const typedArray = new Uint32Array(10)
getRandomValues(typedArray)

const printNumber = (number, i) =>
  console.log(`${String(i + 1).padStart(2, '0')} - ${number}`)

console.log('Your lucky numbers:')
typedArray.forEach(printNumber)
