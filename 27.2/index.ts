class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, date: Date) {
    if (name.length < 3 || !date) {
      throw new Error('Metodos inválidos!')
    }
    this._name = name;
    this._birthDate = date
  }

  get name():string {
    return this.name
  }

  get birthDate(): Date {
    return this._birthDate;
  }
}

const p1 = new Person('luska',new Date('Nov 03, 2000 15:00:00'))
const p2 = new Person('sergio',new Date('jan 12, 1988 15:00:00'))

console.log(p1.birthDate)
console.log(p2.birthDate)