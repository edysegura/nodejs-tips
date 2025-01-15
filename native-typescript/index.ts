// Node.js 22.6+: You can now run TypeScript directly (experimental)
// node --experimental-strip-types example.ts
// Node.js 23 doesn't require the flag above

type User = {
  name: string
  age: number
}

function isAdult(user: User): boolean {
  return user.age >= 18
}

const person = {
  name: 'Justine',
  age: 23,
} satisfies User

const isAnAdult = isAdult(person)
console.log(`👽 Is this person an adult: ${isAnAdult}`)
