import { Person } from './person'
import { printData } from './helper'

const people = [
  new Person('Davi B. Segura'),
  new Person('Lidy B. Segura'),
  new Person('Edy Segura')
]

people.forEach(printData)
