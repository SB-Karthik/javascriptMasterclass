import { Emp } from "./Emp.js";

const emp1 = new Emp('Jatin', 1200)

const emp2 = new Emp('Uday', 4000)

const emp3 = new Emp('Raj', 3000)

console.log(emp1);
console.log(emp2);
console.log(emp3);


console.log(Emp.prototype);
console.log(Emp.prototype.work);
console.log(Emp.prototype.constructor);

console.log(Object.getPrototypeOf(emp1) === Emp.prototype);









