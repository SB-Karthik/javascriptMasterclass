const user = {
    name: 'Jatin',
    age: 21,

    greet: function () {
        console.log(`hello ${this.name}`);
    }
}

const user2 = {
    name: 'Raj',
    age: 21,

    greet: function () {
        console.log(`hello`, this.name);
    }
}



console.log(user.name);
console.log(user.age);
user.greet()
user2.greet()







