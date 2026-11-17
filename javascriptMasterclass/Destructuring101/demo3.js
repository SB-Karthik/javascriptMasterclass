
const user = {
    name: 'Jatin',
    age: 27,
    course: 'SDET Master Class',
    address: 'Pune'
}

const { name, age, course, address = "Indian" } = user;  // giving the defalut value if property doesn't exist in object

console.log(name, age, course, address);




