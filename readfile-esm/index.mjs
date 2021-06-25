import { readFile } from 'fs/promises'

const csvPath = new URL('./contacts.csv', import.meta.url)
const csvText = await readFile(csvPath, 'utf-8')

console.log(csvText)