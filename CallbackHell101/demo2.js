

// function greetUser(userName) {
//     console.log("Hi", userName);
// }

const greetUser = (userName) => {
    console.log("Hi", userName);
}

function processingData(callback, userName) {
    console.log('Processing User Data');
    callback(userName)
}

processingData(greetUser, 'Jatin')

// Callback easily work  with both Sync and Async Operations 

