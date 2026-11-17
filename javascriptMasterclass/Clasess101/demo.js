// ! Object Literal - store employee info

const emp = {
    name: 'Jatin',
    age: 29,
    salary: 10000,
    designation: 'SDET',

    introduce() {
        console.log('Hi my name is Jatin');

    }
}

console.log(emp);
console.log(emp.name);
emp.introduce();

