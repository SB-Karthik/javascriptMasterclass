// Callback is a function is passed as a parameter

const data = () => {
    console.log('Hi my name is Jatin ');

};

//SetTimeOut is Scheduling the callback for the later execution
setTimeout(data, 4000);

console.log('Starting my excecution');