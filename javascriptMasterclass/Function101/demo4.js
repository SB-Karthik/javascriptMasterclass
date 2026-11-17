// function as a parameter

let greet = function () {
    console.log(`Hello jatin`);
}

let x = function () {
    console.log('Hello From TWJ');
}



let greet2 = function () {
    console.log(`Hello greet2`);
}

function execteTask(task) {
    console.log(`Executing the execteTask function........!!!!`);
    task(); // Calling the function passed as a parameter
}



execteTask(x);
execteTask(greet2)
execteTask(greet)
