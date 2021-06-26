// include node packages
const fs = require("fs");
const inquirer = require("inquirer");
const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "index.html");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let employeeArr = [];

// add array of questions for all employees
const questions = [
    {
        type: "list",
        name: "role",
        message:"What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type:"input",
        name: "name",
        message: "What is the Employee's name?"
    },
    {
        type:"input",
        name: "id",
        message: "What is the employee's ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    }]

    // add questions for manager role
     const managerQuestions = [
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number? (Required)",
            validate: officeNumber => {
                if (officeNumber) {
                  return true;
                } else {
                  console.log("Please enter an office number!");
                  return false;
                }
              }
        }
    ]

    // add questions for engineer role
    const engineerQuestions = [
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github Username? (Required)",
            validate: github => {
                if (github) {
                  return true;
                } else {
                  console.log("Please enter a GitHub username!");
                  return false;
                }
              }
        }
    ]
    
    // add questions for intern role
    const internQuestions = [
        {
            type: "input",
            name: "school",
            message: "What school is the intern from? (Required)",
            validate: school => {
                if (school) {
                  return true;
                } else {
                  console.log("Please enter a school name!");
                  return false;
                }
              }
        }
    ]

    // create a function to initialize app
    function init() {
    inquirer
     .prompt(questions)
     .then(function (response) {
        let name = response.name;
        let id = response.id;
        let email = response.email;
        let role = response.role;
        let officeNumber;
        let github;
        let school;

        if (role === "Manager") {
            inquirer
            .prompt(managerQuestions).then(function (response) {
            officeNumber = response.officeNumber;
            let employee = new managerQuestions(name, id, email, officeNumber);
            employeeArr.push(employee);
            addEmployee(employeeArr);
          })
        }

        if (role === "Engineer") {
            inquirer
            .prompt(engineerQuestions).then(function (response) {
            github = response.github;
            let employee = new Engineer(name, id, email, github);
            employeeArr.push(employee);
            addEmployee(employeeArr);
          })
        }

        if (role === "Intern") {
            inquirer
            .prompt(internQuestions).then(function (response) {
            school = response.school;
            let employee = new Intern(name, id, email, school);
            employeeArr.push(employee);
            addEmployee(employeeArr);
          })
        }
      })
    }

    function addEmployee(array) {
        inquirer
        .prompt({
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add an employee? (Required)"
        })
    }

// function call to initialize app
init();

