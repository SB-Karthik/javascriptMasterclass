class Employee {

    name;
    age;
    salary;
    designation;
    project;

    // static 
    static companyName = 'Tech With Jatin'

    static getComapntName() {
        return this.companyName;
    }

    constructor(name, age, salary, designation, project) {
        this.name = name;
        this.age = age
        this.salary = salary
        this.designation = designation
        this.project = project

    }

    work() {
        console.log(`${this.name} is working on the project ${this.project} as a ${this.designation}`);
    }
}

export {
    Employee
}