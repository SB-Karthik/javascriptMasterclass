const user = {
    name: 'Jatin',
    role: 'Tester'
}

// copy of this Object
const copiedUser = user // creating copy reference of the object
console.log('user', user);
console.log('copiedUser', copiedUser);

console.log('*'.repeat(20));

user.role = 'SDET'

console.log('user', user);
console.log('copiedUser', copiedUser);

//Spread oprator 

console.log('Use the Spread ... to create copy of the Object');
const copiedUser2 = { ...user }
user.role = 'Devops'
console.log('copiedUser using SPread operator... ', copiedUser2);

console.log('User', user);









