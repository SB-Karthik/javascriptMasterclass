let data = [10, 20, 30]
let result = data.join('%')
console.log(result)


let data2 = data.reverse(); //[30,20,10]
console.log(data2)
console.log(data)

// spread operator
let names = ['Raj', 'uday', 'Ram']
let x = [...names].reverse()

console.log(x)
console.log(names)




let numberData = [1, 20, 10, 2, 100]
// numberData.sort()
// console.log(numberData)

// let numDataCopy = [...numberData].sort()
// console.log(numberData)
// console.log(numDataCopy)

// numberData.sort(function (a, b) {
//     return a - b;
// })

numberData.sort((a, b) => a - b)

console.log(numberData)
