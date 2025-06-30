import { readFile } from 'node:fs/promises'

const csvPath = new URL('./contacts.csv', import.meta.url)
const csvText = await readFile(csvPath, 'utf-8')

console.log(csvText)

// --------------------------------

const jsonPath = new URL('./contacts.json', import.meta.url)
const jsonText = await readFile(jsonPath)
const jsonData = JSON.parse(jsonText)

console.table(jsonData)
