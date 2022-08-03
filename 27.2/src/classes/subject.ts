export default class Subject {
  private _name: string;
  constructor(name: string) {
    if (name.length < 3) throw new Error('O nome precisa ter 3 caracteres');
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set setName(name: string) {
    if (name.length)
    this._name = name;
  }
}