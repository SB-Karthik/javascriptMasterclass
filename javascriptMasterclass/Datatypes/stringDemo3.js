// Compare Strings

// Primitive values compare in js === [Strict equal check the value and type]

let x = `Jatin`
let y = `Jatin`
let z = `Jat` + `in`
let a = [`J`, `a`, `t`, `i`, `n`].join('')
let b = new String(`Jatin`)

console.log(x === y)
console.log(y === z)
console.log(x === a)

console.log(x === b)

let c = b.valueOf()
console.log(c)
console.log(c === x)




