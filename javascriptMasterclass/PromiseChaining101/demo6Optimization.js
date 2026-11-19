

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const status = true;
            if (status) {
                console.log('User is able to login into the application');
                resolve('Login API Working');
            }
            else {
                console.log('Failed to login');
                reject('Login API Failed');
            }
        }, 3000)
    })
}

function userDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const status = true;
            if (status) {
                console.log('User Details Fetched');
                resolve('User Details API Working');
            } else {
                console.log('Failed to fetch user details');
                reject('User Details API Failed')
            }
        }, 1000)
    })
}

function count() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const status = true;
            if (status) {
                console.log('Loading the count for the Job Created Today, Pending For Delivery');
                resolve('Count API is Working');
            }
            else {
                console.log('Failed to load the count');
                reject('Count API Failed');
            }
        }, 1500)
    })
}

function dashBoard() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const status = true;
            if (status) {
                console.log('DashBoard Data is Loaded Successfully');
                resolve('DashBoard API is Working');
            }
            else {
                console.log('Failed to load the DashBoard Data');
                reject('DashBoard API Failed');
            }
        }, 300)
    })
}


login()
    .then(() => userDetails())
    .then(message => {
        console.log('Resolve message --> ', message);
        return count()
    })
    .then(message => console.log(message))
    .then(() => dashBoard())
    .catch(erroMessage => erroMessage)
    .finally(() => console.log('Application Closed'));







