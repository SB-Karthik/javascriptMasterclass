import { Employee } from "./Employee.js";



const e1 = new Employee('Jatin', 28, 10000, 'SDET');
console.log(e1);

const e2 = new Employee('Uday', 27, 20000, 'DEV');
console.log(e2);

const e3 = new Employee('Raj', 26, 30000, 'QA');
console.log(e3);

e1.markattendance();
e2.markattendance();
e3.markattendance();



