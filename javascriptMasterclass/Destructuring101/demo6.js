// Array destructuring
// Object -> properties
// array ->> Value !! [index]

const browsers = ['Chrome', 'Firefox', 'Safari'];
console.log(browsers);
console.log(browsers[0]);
console.log(browsers[1]);
console.log(browsers[2]);
console.log('---'.repeat(20));


const [b1, b2, b3] = browsers
console.log(b1);
console.log(b2);
console.log(b3);
console.log('---'.repeat(20));


// accessing  the first and last elements in array
const [B1, , B3] = browsers
console.log(B1);
console.log(B3);




