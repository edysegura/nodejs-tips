async function generateName() {
  const response = await fetch('https://randomuser.me/api/')
  const json = await response.json()
  return `${json.results[0].name.first} ${json.results[0].name.last}`
}

function* getUsers() {
  while (true) {
    yield {
      id: crypto.randomUUID(),
      name: `John Doe`, // fix: use the generated name here
    }
  }
}

getUsers()
  .take(10) // this is supported since Node.js v22+
  .map((user) => ({
    ...user,
    isActive: false,
  }))
  .forEach((user) =>
    console.log(`insert user [${user.id}] ${user.name} to the database`),
  )
