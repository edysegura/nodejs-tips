function* getUsers() {
  while (true) {
    yield {
      user: crypto.randomUUID(),
      name: `fake name ${crypto.randomUUID()}`,
    }
  }
}

const results = getUsers()
  .take(1)
  .map((user) => ({
    ...user,
    isActive: false,
  }))
  .forEach((user) => console.log(`insert user ${user.id} to the database`))

console.table(results)
