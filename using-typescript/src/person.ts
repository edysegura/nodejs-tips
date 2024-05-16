import { randomUUID as uuid } from 'crypto'

export class Person {
  name: string

  private generatedId: string

  constructor(name: string) {
    this.generatedId = uuid()
    this.name = name
  }

  get id(): string {
    return this.generatedId
  }
}
