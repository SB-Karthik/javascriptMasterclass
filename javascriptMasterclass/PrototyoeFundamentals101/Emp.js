class Emp {
    name;
    salary;


    constructor(name, salary) {
        this.name = name;
        this.salary = salary;

    }

    work() {
        console.log(`${this.name} is working`);
    }
}


export {
    Emp
}