// import Person from "./classes/person"

import Subject from "./classes/subject";

// import Student from "./classes/student";

// const p1 = new Person('luska',new Date('Nov 03, 2000 15:00:00'))
// const p2 = new Person('sergio',new Date('jan 12, 1988 15:00:00'))

// console.log(p1.birthDate)
// console.log(p2.birthDate)

// const estudante1 = new Student('luska', new Date('Nov 03, 2000'))

// estudante1.setExamGrades = [7, 10, 8, 9]
// // console.log(estudante1);
// console.log('Nota: ', estudante1.sumGrades())
// console.log('Média: ', estudante1.sumAverageGrade())
// console.log('MarTícula: ', estudante1.generateEnrollment())

const math = new Subject('Matemática');
console.log(math.name)
math.setName = 'Filosofia';
console.log(math.name);