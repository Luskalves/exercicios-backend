import Person from "./person";

export default class Student extends Person {
  public _enrollment: string;
  private _examsGrades: number[];
  private _workGrades: number[];
  constructor(
    name: string,
    date: Date,
    enrolment: string,
    examsGrades: number[],
    workGrades: number[],
  ) {
    super(name, date);
    this._enrollment = enrolment;
    this._examsGrades = examsGrades;
    this._workGrades = workGrades
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

  set setExamGradews(examsGrades: number[]) {
    this._examsGrades = examsGrades;
  }

  get workGrades(): number[] {
    return this._workGrades;
  }

  set setWorkGrades(workGrades: number[]) {
    this._workGrades = workGrades;
  }
}