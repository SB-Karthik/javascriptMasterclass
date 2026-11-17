let result = 1 + 1;
let result2 = 20;
let result3 = 'jatin'
let result4 = { name: 'jatin' }

let x = function () {
    console.log('Hello From TWJ');
}

x();
console.log(x);  //---> reference variable

function add(num1, num2) {
    console.log(num1 + num2);

}

add(result, result2)


// function as a parameter

let greet = function () {
    console.log(`Hello jatin`);
}

function execteTask(task) {
    console.log(`Executing the execteTask function........!!!!`);
    task(); // Calling the function passed as a parameter
}

execteTask(greet);