// Manager Object Class
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officeNumber = officenumber;
    };

    getOfficenumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    };
};

module.exports = Manager;