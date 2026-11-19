// Promise Combinator
// all(), allSettled(), race(), any()

const promise1 = new Promise((resolve, reject) => {
    resolve('Promise 1 successfull')
})

const promise2 = new Promise((resolve, reject) => {
    resolve('Promise 2 successfull')
})

const promise3 = new Promise((resolve, reject) => {
    reject('Promise 3 fail')
})


Promise.all([promise1, promise2, promise3]).then((result) => {
    console.log(result)
})
    .catch((error) => {
        console.log(error);

    })

console.log('-'.repeat(30));

// allSettled provides a promise and result contains data for both fulfilled and rejected Promises
// settled should not be in pending state, it can be rejected or fulfilled
Promise.allSettled([promise1, promise2, promise3]).then((result) => {
    console.log(result);

})
    .catch((error) => {
        console.log(error);

    })

