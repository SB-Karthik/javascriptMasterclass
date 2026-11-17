class Employee {


    //fields
    #name;
    #salary;
    #empId;
    static #counter;
    #designation;
    #project;

    static {
        Employee.#counter = 1001;
    }

    constructor(name, salary, designation, project) {
        if (typeof name === 'string' && this.#validateSalary(salary)) {
            this.#name = name;
            this.#salary = salary;
            this.#designation = designation;
            this.#project = project;
            this.#empId = Employee.#counter++;
            Object.preventExtensions(this);
        }

    }

    get name() {
        return this.#name;
    }

    set name(name) {
        if (typeof name === 'string') {
            this.#name = name;
        }
    }

    getSalary() {
        return this.#salary;
    }
    setSalary(salary) {
        if (this.#validateSalary(salary)) {
            this.#salary = salary;
        }
    }

    #validateSalary(salary) {
        if (salary > 0 && typeof salary === 'number') {
            return true
        } else {
            throw new error('Invalid Salary, salary >0 and should be number ')
        }
    }

    getEmployeeInfo() {
        console.log(`
            Emplyee ID : ${this.#empId} , 
            Employee Name : ${this.#name}, 
            Employee Salary : ${this.#salary}, 
            Employee Designation : ${this.#designation}, 
            Employee Project : ${this.#project}
            `)
    }
}

Object.preventExtensions(Employee);  // prevent static fields getting added from outside the class

export { Employee }