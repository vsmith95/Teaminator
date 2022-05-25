// Manager Object Class
class Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber;
    };

    getOfficenumber() {
        return this.officenumber;
    }

    getRole() {
        return "Manager";
    };
};

module.exports = Employee;