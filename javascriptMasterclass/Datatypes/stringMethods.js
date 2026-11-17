let emailAddress = `jatinvsharma@gmail.com`

console.log(emailAddress.length)

// convert the String to Upper case
let data = emailAddress.toUpperCase()
console.log(data);

// convert the string to lowercase
let lowerCaseData = emailAddress.toLowerCase()
console.log(lowerCaseData)

// 
let x = `         Hello         `
console.log(x)
let trimmedX = x.trim()
console.log(trimmedX)


// includes
console.log(emailAddress.includes(`@gmail.com`))
console.log(emailAddress.includes(`@yahoo.com`))

// indexOf
console.log(emailAddress.indexOf(`com`))

//start with
console.log(emailAddress.startsWith(`jatin`))

console.log(emailAddress.endsWith(`com`))

//substring() / slice() / substr()

let userName = emailAddress.slice(0, 5)
console.log(userName)

let domain = emailAddress.slice(-9)
console.log(domain)

let user_name = emailAddress.substring(0, 5)        // can't pass negative value
console.log(user_name)

// replacing
let newResult = emailAddress.replace(`jatin`, `Raj`)
console.log(newResult)
console.log(emailAddress)


let newResult2 = emailAddress.replaceAll(`a`, `r`)
console.log(newResult2)


