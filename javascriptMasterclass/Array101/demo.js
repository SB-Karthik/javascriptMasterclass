// Arrays in JS

let names = [`Jatin`, `Raj`, `Ritu`]
console.log(names[`0`])
console.log(names[1])
console.log(names[2])

//for loop
for (let index = 0; index < names.length; index++) {
    console.log(names[index])
}

console.log(`*`.repeat(20))

for (let x of names) {
    console.log(x)
}

console.log(`*`.repeat(20))

for (let key in names) {
    console.log(names[key])
}






