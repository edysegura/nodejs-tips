export class Person {
  private id_: number
  name: string

  constructor(name: string) {
    this.id_ = Date.now()
    this.name = name
  }

  get id(): number {
    return this.id_
  }
}
