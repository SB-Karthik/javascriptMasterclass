// instead of call back hell this is the solution using PROMISE

function login() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve('User Logeed into the application');
            }
            else {
                reject('Failed to login')
            }

        }, 3000)
    })

    return promise;

}

function userDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve('User Details Loaded');
            } else {
                reject('Failed to load')
            }
        }, 1000)
    })

}

function count() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve('Loading the count for the Job Created Today, Pending For Delivery');
            }
            else {
                reject('Failed to load the count')
            }
        }, 1500)
    })

}


login().then((message) => {
    console.log(message);
    return userDetails();
})
    .then((message) => {
        console.log(message);
        return count();
    })
    .then((message) => {
        console.log(message);
    })
    .catch((erroMessage) => {
        console.log(erroMessage);
    })
    .finally((message) => {
        console.log('Application Closed');
    })










