import { Emp } from "./Emp.js";


const e1 = new Emp('Jatin', 1000)

//Prototype chaining
// one object is linked to another Object (proto)
// [[prototype]]

console.log(Object.getPrototypeOf(e1) === Emp.prototype);

console.log(Object.getPrototypeOf(Emp.prototype) === Object.prototype);

console.log(Object.getPrototypeOf(Object.prototype));   //null







