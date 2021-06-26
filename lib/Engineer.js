const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // call parent Employee class
        super(name, id, email);

        // add github username
        this.github = github;

    }    

     getGithub() {
         return this.github;
     }

     getRole() {
         return "Engineer";
     }
}

module.exports = Engineer; 