import bcryptjs from 'bcryptjs'

async function main() {
  const salt = 8
  const generatedHash = await bcryptjs.hash('batatinha', salt)
  console.log('Hash: ', generatedHash)
}

main()
