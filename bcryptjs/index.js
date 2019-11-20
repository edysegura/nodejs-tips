const bcrypt = require('bcryptjs')

async function main() {
  const salt = 8
  const hash = await bcrypt.hash('batatinha', salt)
  console.log('Hash: ', hash)
}

main()