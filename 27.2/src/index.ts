import Person from "./person"

const p1 = new Person('luska',new Date('Nov 03, 2000 15:00:00'))
const p2 = new Person('sergio',new Date('jan 12, 1988 15:00:00'))

console.log(p1.birthDate)
console.log(p2.birthDate)