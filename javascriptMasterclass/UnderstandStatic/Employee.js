
class Employee {
    static empId;
    name;
    salary;

    static env;

    static {
        if (process.env.NODE_ENV === 'prod') {
            console.log('Seleccting the prod env ');
            this.env = 'prod'
        }

        if (process.env.NODE_ENV === 'qa') {
            console.log('Seleccting the qa env ');
            this.env = 'qa'
        }
    }


    static {
        //Static Block
        console.log('Initializing the counter........');
        this.empId = 0; // this refers to the class 

    }



    static {
        console.log('This is static block 2');

    }

    static getCompanyName() {
        console.log('Tech With Jatin');

    }


    constructor(name, salary) {
        Employee.empId++;
        this.name = name
        this.salary = salary
        this.employeeId = Employee.empId
    }

    getEmployeeInfo() {
        console.log('*'.repeat(5), 'Employee Info'.toUpperCase(), '*'.repeat(5))
        console.log('Employee Name:'.toUpperCase(), this.name)
        console.log('Employee Salary:'.toUpperCase(), this.salary)
        console.log('Employee ID:'.toUpperCase(), this.employeeId)
    }
}

export {
    Employee
}