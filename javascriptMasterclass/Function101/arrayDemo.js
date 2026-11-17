const data = [10, 20, 30]
console.log(data);

// Transformation ------> map()---> Higer order function --> (callback) or return function

let multipler = function (number) {
    return number * 2;
}

let addition = number => { return number + 5 }

const result = data.map(multipler)
console.log(result);
const result1 = data.map(addition)
console.log(result1);

// for each
console.log(`Using for each.  -------->`);

data.forEach((value, index) => console.log(index, ' -> ', value))

// filter method. -> used to check against all the values in the array

const resultOfFilter = data.filter((value) => value > 10)
console.log(resultOfFilter);


// find Method

const user = [
    { id: 101, name: 'Kiran', age: 24 },
    { id: 221, name: 'Jatin', age: 25 },
    { id: 332, name: 'Ram', age: 26 },
    { id: 444, name: 'Raj', age: 24 }
]

const found = user.find((value) => value.id === 332);
console.log(found);









