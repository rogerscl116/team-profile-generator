const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // add github username
        this.github = github;
        this.getRole = "Engineer";

        // call parent Employee class
        super(name, id, email);
    }    

    // getGithub()
}

module.exports = Engineer; 