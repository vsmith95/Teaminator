// Engineer Object Class
class Engineer {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    };

    getGithub() {
        // GitHub Username
        return this.github;
    }

    getRole() {
        return "Engineer";
    };
};

module.exports = Engineer;