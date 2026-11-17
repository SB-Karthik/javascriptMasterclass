
const user = {
    name: 'Jatin',
    age: 27,
    course: 'SDET Master Class'
}

//Mapping the property to new VariableName
const { name: username, age: userage, course: mycourse } = user;
console.log(username);
console.log(userage);
console.log(mycourse);
