
function printName() {
    console.log('Hello !!!!', this.name);
}

const user = {
    name: 'Jatin',
    greet: printName
}

const user2 = {
    name: 'Raj',
    greet: printName
}

user.greet()
user2.greet()
