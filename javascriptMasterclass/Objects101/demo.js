
// Object Literal
let user = {
    'first_name': 'Jatin',
    age: 34,
    isActive: true,
    marks: [75, 83, 98],
    greet: function () {
        console.log(`Hello my name is ${'first_name'}`)
    },
    address: {
        line1: 'c 302',
        apartment: 'my apartment',
        city: 'Bangalore',
        pincode: 560078
    }

}

console.log(user)
console.log('-'.repeat(30));
// sccess first name
console.log(user.first_name)
console.log(user["first_name"])
console.log('-'.repeat(30));

console.log(user.marks[0])

console.log(user.address.city)
console.log('-'.repeat(30));

user.greet();
