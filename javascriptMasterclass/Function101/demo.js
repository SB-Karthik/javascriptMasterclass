// can exist without class
// functions are Hoisted!!!

greet();
greetUser(`Jatin`)

function greet() {
    console.log('Hello Everyone!');
}

function greetUser(name) {
    console.log(`Hello ${name}`)
}

function add(num1, num2) {
    return num1 + num2
}

let sum = add(`Jatin`, 30)
console.log(sum);
