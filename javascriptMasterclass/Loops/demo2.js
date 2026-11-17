// for loop

const data = [`Jatin`, `Joshi`, `karthi`, `SDET`, `Youtube`]

for (let index = 0; index < data.length; index++) {
    console.log(data[index]);
}

//same as for each loop in java Use in [Arrays/String]
for (let username of data) {
    console.log(username);
}

let user = `jatin`
for (let character of user) {
    console.log(character)
}

// for In loop Use in {Arrays/string/objects}
for (let x in data) {
    console.log(x)
}

let response = { username: "Karthi", city: "Bangalore", age: 23 }
for (let key in response) {
    console.log(key + " " + response[key])
}

