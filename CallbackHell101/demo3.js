//Syncronous Operations 

function login(callback) {
    setTimeout(() => {
        console.log('User Logeed into the application');
        callback(); // login(userDetails)
    }, 3000)

}

function userDetails(callback) {
    setTimeout(() => {
        console.log('User Details Loaded');
        callback();  // userDetails(count) ====> count()
    }, 1000)

}

function count() {
    setTimeout(() => {
        console.log('Loading the count for the Job Created Today, Pending For Delivery');
    }, 1500)

}

// login(userDetails)
// userDetails(count)

// Callback chaining
// When one callback starts an Operation which triggers another callbacks and that callback triggers another callback async operation

//Callback Hell - Nested Callbacks
// when multiple asynchronous operations are nested inside this result in a deeply nested code which is difficult to maintain and read

login(function () {
    userDetails(function () {
        count()
    })
})

