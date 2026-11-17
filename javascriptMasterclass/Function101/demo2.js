greet(`jatin`);


function greet(name = `Guest`) {
    console.log(`Hello`, name);
}

function greet() {
    console.log(`Hello this is 2nd function`);      // no method overloading in javascript
}

greet();

