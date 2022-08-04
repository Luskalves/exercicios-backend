import Employee from "../../interfaces/PessoaFuncionaria";
import Person from "./person";
import { randomBytes } from 'crypto';

class Professor extends Person implements Employee {
  private _registration: string = '';
  private _salary: number;
  private _admissionDate: Date = new Date;
  private _subject: string;
  constructor(name: string, date: Date, salary: number, subject: string) {
    super(name, date)
    this._salary = salary;
    this._subject = subject;
  }
  get registration(): string {
    return this._registration
  };

  set setRegistration(register: string) {
    if (register.length < 16) throw new Error('Precisa ter no minimo 16 caracteres')
    this._registration = register
  }

  get salary(): number {
    return this._salary;
  }

  set setSalary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo');
    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set setAdmissionDate(data: Date) {
    this._admissionDate = data;
  }

  get subject(): string {
    return this._subject
  }

  set subject(subject) {
    this._subject = subject;
  }

 generateRegistration(): string {
    const registration = randomBytes(8).toString('hex');
    return registration;
  }
}

export default Professor;