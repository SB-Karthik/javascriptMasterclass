// Calculator Application

/*
? What is module?
* it is code which is present ona file and we and we try to exort it and access it another file

! There are 2 important keywords
- export : access functionality, variable or constant or objects outside the file(.js)
- import : is used to import the functionality or variable in the required file(.js)

? There are different type export od modules :-
* Named Export
* Default Export [Important]

*/


const appName = 'Tech With Jatin Calculator';

function add(number1, number2) {
    console.log('Addition Result = ', number1 + number2);
}

function sub(number1, number2) {
    console.log('Subtraction Result = ', number1 - number2);
}

function mul(number1, number2) {
    console.log('Multiplication Result = ', number1 * number2);
}

function div(number1, number2) {
    console.log('Division Result = ', number1 / number2);
}

function demo() {
    console.log('Hello from demo');
}

const temp = 'Default export'

export default { demo, temp };  // default export


// Named export
export {
    add,
    sub,
    mul,
    div,
    appName
}




















