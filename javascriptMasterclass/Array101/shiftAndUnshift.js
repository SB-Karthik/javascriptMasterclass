let data = [10, 20, 30]
console.log(data)

// shift() -> removes the first element and returns the first element

let fElement = data.shift()
console.log(fElement)
console.log(data)

console.log('-'.repeat(30))

//unshift() -> add the element to the start and returns length
let newLength = data.unshift(33, 44, 55);
console.log(newLength)
console.log(data)

let result = data.includes(-11);
console.log(result)


