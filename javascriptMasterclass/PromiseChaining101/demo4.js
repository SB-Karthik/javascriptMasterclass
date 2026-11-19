
const promise = new Promise((resolve, reject) => {
    // Inside executor code -> we will be having the ASYNC Code

    // resolve('Login was successfull')
    console.log('Login successful Token Generated');

    resolve({ username: 'Jatin', token: 2525 })

})

// then() returns another Promise automatically
promise.then((data) => {
    // console.log(message);
    console.log(data.username);
    console.log(data.token);
    return 'Fetching user data'
})
    .then((message) => {
        console.log(message);

    })



