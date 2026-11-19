// Promises

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Operation is Successful')
    } else {
        reject('Operation is failed')
    }
});



// promise.then((message) => {
//     console.log(message);
// })

promise.then((message) => {
    console.log(message);
})
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Application Closed....');

    })




