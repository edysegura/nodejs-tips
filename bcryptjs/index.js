import bcryptjs from 'bcryptjs'

async function main() {
  const salt = 8
  const generatedHash = await bcryptjs.hash('your secret password', salt)
  console.log('Hash: ', generatedHash)
}

main()
