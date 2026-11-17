import { Developer } from "./Dev.js";
import { Employee } from "./Employee.js";
import { Tester } from "./Tester.js";


const t1 = new Tester('Jatin', 27, 10000, 'SDET', 'Pheonix Project', 'Postman')
console.log(t1)


const d1 = new Developer('Raj', 26, 20000, 'SDE', 'Pheonix Project')
console.log(d1);
d1.work()
t1.work();
t1.demo()

console.log('-'.repeat(20));

console.log(Employee.companyName);
console.log(Tester.companyName);
console.log(Employee.getComapntName());
console.log(Tester.getComapntName());







