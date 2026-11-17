let data = []

console.log(data.length)
data[1000] = 'Jatin'
// console.log(data)


//Pop function
let names = [`Katrina`, `Alia`, `Deepika`]
console.log(names)

let data1 = names.pop()
console.log(names)
console.log(data1)

data1 = names.pop()
console.log(names)
console.log(data1)

data1 = names.pop() // katrina popped
console.log(names)
console.log(data1)

data1 = names.pop() // undefined
console.log(names)
console.log(data1)
