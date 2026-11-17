// below function is doing multiple task and which are hardcoded it will increase code complexity and regidity


function calculation(num1, num2, operation) {
    switch (operation) {
        case "add":
            return num1 + num2;

        case "sub":
            return num1 - num2

        case "mul":
            return num1 * num2

        default: console.log(`Invalid Operation`)
    }
}

// const result = calculation(10, 20, 'add')
// console.log(result);


// solve above problem

const add = function (num1, num2) {
    return num1 + num2;
}

const sub = function (num1, num2) {
    return num1 - num2;
}

const mul = function (num1, num2) {
    return num1 * num2;
}

const div = function (num1, num2) {
    return num1 / num2;
}


function calculation2(num1, num2, operation) {
    return operation(num1, num2)
}

const result2 = calculation2(10, 20, div)
console.log(result2);

