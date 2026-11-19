

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 Successfull')
    }, 3000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2 Failed')
    }, 500)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 Successfull')
    }, 1000)
})

//Race basically gives the first settled (Resolved or Rejected) promise result
Promise.race([promise1, promise2, promise3]).then((message) => {
    console.log(message)
})
    .catch((error) => {
        console.log(error);

    })


// Any basically gives the first Resolved/Fulfilled promise result (ignore rejected promises)
// get AggregateError if all the promises rejected. (use only if you are sure about atleast one promise to be resolved)
Promise.any([promise1, promise2, promise3]).then((message) => {
    console.log(message)
})
    .catch((error) => {
        console.log(error);

    })


