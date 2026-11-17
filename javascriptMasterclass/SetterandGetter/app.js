import { Employee } from "./Emp.js";




const emp1 = new Employee('Jatin', 20000, 'QA', 'Pheonix Automation');
// console.log(emp1);
emp1.getEmployeeInfo();


const emp2 = new Employee('Karthik', 20000, 'Dev', 'Java');
// console.log(emp2);
emp2.getEmployeeInfo();

console.log('Read the salary for the employ 2');
console.log(emp2.getSalary());


