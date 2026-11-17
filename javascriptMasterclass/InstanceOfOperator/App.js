import { Emp } from "./Emp.js";
import { Student } from "./Student.js";


const e1 = new Emp('Jatin');

console.log(e1 instanceof Emp);
console.log(e1 instanceof Object);

console.log(e1 instanceof Student);



