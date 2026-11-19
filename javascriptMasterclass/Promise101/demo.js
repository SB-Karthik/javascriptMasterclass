// Promises
// Promise is a JS Object which is basically used to manage the async function result

//Remember
//Promise Object is created it's initial state is always Pending..
// we don't know what's the status of this Operator

const promise = new Promise((resolve, reject) => {
    resolve('Operation is Successful')
    // reject('Operation is failed')
}); // Promise Object

console.log(promise); // Promise { 'Operation is Successful' } or fulfilled


// States of Promise
// 1. Pending -> (Initial State) -> means operation is still running
// 2. Fulfilled -> (Resolve) -> means operation is Successful
// 3. Rejected -> (Reject) -> means operation is failed -> UnhandledPromiseRejection

// we have to handle the reject with catch block
// Promise is case senstive (P is capital)
// resolve and reject are functions
