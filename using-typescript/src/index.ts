import { Person } from './person'

[
  new Person('Davi B. Segura'),
  new Person('Lidy B. Segura'),
  new Person('Edy Segura')
].forEach(person => console.log(`${person.id} - ${person.name}`))
