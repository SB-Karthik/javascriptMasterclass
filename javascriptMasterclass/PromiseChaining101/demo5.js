
const promise = new Promise((resolve, reject) => {
    resolve(10)
})


promise.then((number) => {
    return number * 2
})
    .then((num) => {
        console.log(num);
    })





