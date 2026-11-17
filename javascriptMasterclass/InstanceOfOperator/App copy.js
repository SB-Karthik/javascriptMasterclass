

const arr = []

console.log(arr instanceof Array);
console.log(arr instanceof Object);

let fname = 'Jatin'     // Primitive Value 

console.log(fname instanceof String);

const fname2 = new String('Jatin')

console.log(fname2 instanceof String);  // only works on object