//3rd way to create Object
// prototype

let person = {
    'name': "jatin",
    age: 22,
    isActive: true


}

let studentRef = Object.create(person)
console.log(studentRef)
studentRef.marks = [99, 98, 97]
studentRef.name = 'Karthi'
console.log(studentRef)

console.log(Object.getPrototypeOf(studentRef))

console.log('-'.repeat(30))
console.log(studentRef.name)

console.log(Object.getPrototypeOf(studentRef).name)

console.log(studentRef.hasOwnProperty('isActive'))
console.log(studentRef.hasOwnProperty('marks'))







