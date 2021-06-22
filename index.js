// include node packages
const fs = require('fs');
const inquirer = require('inquirer');


// add array of inquirer prompts
const questions = [
    {
        type: 'list',
        name: 'role',
        message:"What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type:'text',
        name: 'employee',
        message: "What is the Employee's name?"
    },
    {
        type:'text',
        name: 'id',
        message: "What is the employee's ID number?"
    },
    {
        type: 'text',
        name: 'email',
        message: "What is the employee's email?"
    }]


