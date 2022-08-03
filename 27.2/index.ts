class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, date: Date) {
    if (name.length < 3 || name.length > 120 || !date) {
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