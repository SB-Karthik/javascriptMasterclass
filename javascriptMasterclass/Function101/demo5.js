
const greet = function () {
    console.log(`Hello`);

}

function executeTask(task) {
    console.log("Hi executing task  !!!!");

    task()
}

executeTask(greet)

// Arrow function

const add = (a, b) => {
    console.log(`Adding two values......`);
    console.log(a + b);
}

executeTask(() => add(2, 3))

// singlre parameter
const multiple = number => console.log(number * 10);
executeTask(() => multiple(5))