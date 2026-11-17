// Spread Operator : Create copy of an array

const arr1 = [10, 20, 30]
const arr2 = arr1   // this is not an array copy!! we created another reference to the same array

console.log('arr1: ', arr1);
console.log('arr2: ', arr2);

arr1.push(40);
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);


console.log('Creating copy with the spread operator');

const arr3 = [...arr1];
console.log('arr3: ', arr3);

console.log('arr1: ', arr1);
console.log('arr2: ', arr2);

arr1.push(50);
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);

console.log('arr3: ', arr3);


