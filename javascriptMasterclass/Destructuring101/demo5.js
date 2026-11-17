// function printUser(user) {
//     console.log(user.id);
//     console.log(user.name);
// }

// destructuring the property of object in function parameter itself
function printUser2({ id, name }) {
    console.log(id, name);
}

function printUser({ id, name }) {
    console.log('Hello from printUser1');
    console.log(id);
    console.log(name);
}

const user = {
    id: 102,
    name: 'Jatin'
}

printUser(user)     //function Calling


