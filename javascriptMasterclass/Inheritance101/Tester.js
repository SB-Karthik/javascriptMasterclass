import { Employee } from "./Employee.js";

class Tester extends Employee {
    tools;
    constructor(name, age, salary, role, designation, tools) {
        super(name, age, salary, role, designation);
        this.tools = tools;
    }

    work() {
        console.log(`${this.name} is Testing on the project ${this.project} using ${this.tools}`);
    }

    demo() {
        super.work()
    }

    static getComapntName() {
        return `Tester is working for the Company ${this.companyName}`
    }

}

export {
    Tester
}

