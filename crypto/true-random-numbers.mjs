import { getRandomValues } from 'crypto' // dropped on node v14.17.0

const typedArray = new Uint32Array(10)
getRandomValues(typedArray)

console.log('Your lucky numbers:')
for (const num of typedArray) {
  console.log(num)
}
