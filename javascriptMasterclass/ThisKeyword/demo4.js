const user = {
    name: 'Raj',
    loginCount: 0,
    login() {
        console.log('Logged in successfully!!!');
        this.loginCount++;
        this.printInfo();
    },
    printInfo() {
        console.log('Welcome', this.name);

    }
}

console.log(user.name);
console.log(user.loginCount);

user.login();
user.login();
user.login();

console.log(user.loginCount);



