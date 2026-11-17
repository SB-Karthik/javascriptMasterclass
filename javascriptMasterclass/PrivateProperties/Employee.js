class Employee {

    name;
    #salary;   // Private property
    static #count;

    static {
        this.#count = 100;
    }

    constructor(name, salary) {
        this.name = name;
        this.empId = Employee.#count++;
        if (this.#validationSalary(salary)) {
            this.#salary = salary;
        }
        Object.preventExtensions(this); // prevents modifying the struxture of he Object
    }

    #validationSalary(salary) {
        if (salary > 0 && typeof salary === 'number') {
            return true
        } else {
            throw new Error("Invalid Salary, Salary >0 and should be number");

        }
    }

    getEMployeeData() {
        console.log('EMployee Information '.toUpperCase());
        console.log('EMployee Name: '.toUpperCase(), this.name);
        console.log('EMployee Salaty: '.toUpperCase(), this.#salary);
    }


    #calculateBonus() {
        return this.#salary * 0.1;
    }

    showBonus() {
        console.log('The Bonus for the financial year.....');
        console.log(this.#calculateBonus());
    }

}


export {
    Employee
}