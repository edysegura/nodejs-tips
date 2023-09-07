import { randomUUID } from 'crypto' // Added in: node v14.17.0

// prettier-ignore
[
  randomUUID(),
  randomUUID(),
  randomUUID(),
  randomUUID(),
].forEach(uuid => console.log(uuid))

// crypto.randomUUID is three times faster than uuid. And no need to add extra dependency.
