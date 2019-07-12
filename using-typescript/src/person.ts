import * as uuid from 'uuid/v4'

export class Person {
  name: string

  private readonly generatedId: number

  constructor(name: string) {
    this.generatedId = uuid()
    this.name = name
  }

  get id(): number {
    return this.generatedId
  }
}
