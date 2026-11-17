let data = [10, 20, 30, 50]

let result = data.filter(function (value) {
    return value >= 30
})
console.log(result)


let data1 = [{ 'name': 'Jatin', 'id': 101, 'salary': 250000 },
{ 'name': 'Karthi', 'id': 202, 'salary': 20000 },
{ 'name': 'Ananya', 'id': 303, 'salary': 30000 },
{ 'name': 'Ashok', 'id': 111, 'salary': 27500 }
]


let result1 = data1.filter(function (user) {
    return user.id === 202
})

console.log(result1)
console.log('*'.repeat(30))

// find method
let ans = data1.find(function (user) {
    return user.id === 202
})

console.log(ans)
console.log('*'.repeat(30))

let index = data1.findIndex(function (user) {
    return user.id === 202
})

console.log(index)


