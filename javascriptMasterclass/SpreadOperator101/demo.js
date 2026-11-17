// Spread Operator
/*
... is to expand the value any iterable[array.String]
or properties of an Objects
*/

const arr = [11, 22, 33]
//for loop
for (let x of arr) {
    console.log(x);
}
console.log('*'.repeat(20));
arr.forEach(value => console.log(value));

console.log('Spread Operator Expands the values in the array');

console.log(...arr); // expand the array ! [Printing the elements dierectly]








