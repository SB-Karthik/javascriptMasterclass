let userdata = {
    username: 'Jatin'
}

console.log(userdata)

//2nd way tcreate Object
let data = new Object()
console.log(data)
data.name = 'Jatin'
console.log(data)


//3rd way tcreate Object
let student = Object.create(userdata)       // c reate object using a prototype 
student.name = 'ritu'
console.log(student)
console.log(Object.getPrototypeOf(student))
console.log(student.username)
console.log('-'.repeat(30))











