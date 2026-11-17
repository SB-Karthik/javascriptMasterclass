class Employee {
    // name;
    // age;
    // salary;
    // designation;

    constructor(name, age, salary, designation) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
    }

    markattendance() {
        console.log(`Attendance is marked for the Employee ${this.name}`)
    }
}

export {
    Employee
}


