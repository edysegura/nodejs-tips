import { Person } from "./person"

export function printData(person: Person) {
  console.log(`${person.id} - ${person.name}`)
}