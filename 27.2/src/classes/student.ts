import Person from "./person";
import { randomBytes } from 'crypto';

export default class Student extends Person {
  public _enrollment: string;
  private _examsGrades: number[] = [];
  private _workGrades: number[] = [];
  constructor(
    name: string,
    date: Date,
  ) {
    super(name, date);
    this._enrollment = '';
  }

  get getEnrollment(): string {
    return this._enrollment;
  }

  set setEnrollment(enrollment: string) {
    this._enrollment = enrollment;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set setExamGrades(examsGrades: number[]) {
    if (examsGrades.length > 4) throw new Error('Máximo de 4 notas');
    this._examsGrades = examsGrades;
  }

  get workGrades(): number[] {
    return this._workGrades;
  }

  set setWorkGrades(workGrades: number[]) {
    if (workGrades.length > 2) throw new Error('Máximo de 2 notas');
    this._workGrades = workGrades;
  }

  sumGrades(): number {
    let nota = 0;
    this._examsGrades.forEach((grade) => nota += grade);

    return nota;
  }

  sumAverageGrade(): number {
    const notas = this.sumGrades();
    const media = notas / this._examsGrades.length
    return media;
  }

  generateEnrollment(): any {
    const enrolment = randomBytes(8).toString('hex');
    if (enrolment.length > 16) throw new Error('Tamanho inválido');
    this._enrollment = enrolment;
    return enrolment;
  }
}