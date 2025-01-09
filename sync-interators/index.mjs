function* getUsers() {
  while (true) {
    yield {
      id: crypto.randomUUID(),
      name: `fake name ${crypto.randomUUID()}`,
    }
  }
}

getUsers()
  .take(10) // this is supported since Node.js v22+
  .map((user) => ({
    ...user,
    isActive: false,
  }))
  .forEach((user) => console.log(`insert user ${user.id} to the database`))
