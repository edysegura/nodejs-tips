function* getUsers() {
  while (true) {
    yield {
      id: crypto.randomUUID(),
      name: `fake name ${crypto.randomUUID()}`,
    }
  }
}

getUsers()
  .take(10)
  .map((user) => ({
    ...user,
    isActive: false,
  }))
  .forEach((user) => console.log(`insert user ${user.id} to the database`))
