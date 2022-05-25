// Main page fo the application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('./src/page-template');
const teamMembers = [];
const idArr = [];

function appMenu() {
    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the Manager's name?",
                validate: nameInput => {
                    if (nameInput >= '') {
                        return true
                    } else {
                        return "Please enter a name."
                    } 
                }
            },

            {
                type: "input",
                name: "managerID",
                message: "What is the Manager's ID?",
                validate: idInput => {
                    const pass = idInput.match(
                        /^[1-9]\d*$/
                      );
                    if (pass) {
                        return true
                    } else {
                        return "Please enter a Valid ID."
                    } 
                }
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What is the Manager's email?",
                validate: emailInput => {
                    const pass = emailInput.match(
                        /\S+@\S+\.\S+/
                    )
                    if (pass) {
                        return true
                    } else {
                        return "Please enter a valid email."
                    } 
                }
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the Manager's office number?",
                validate: officeNumberInput => {
                    const pass = officeNumberInput.match(
                        /^[1-9]\d*$/
                    )
                    if (pass) {
                        return true
                    } else {
                        return "Please enter a valid Office Number."
                    } 
                }
            },

        ])
        .then(answers => {
            const manager = new Manager(answers.managerEmail, answers.managerName, answers.managerID, answers.managerOfficeNumber);
        });
    };

    function createTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What role are you adding?',
                choices: ['Engineer', 'Intern', 'None']
            },
        ])
        .then(userChoice => {
            switch(userChoice) {
                case 'Engineer': 
                    addEngineer()
                    break;
                case 'Intern':
                    addIntern()
                    break;
                default:
                    buildTeam()
            }
        })
    };

    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the Engineer's name?",
                validate: nameInput => {
                    if (nameInput >= '') {
                        return true
                    } else {
                        return "Please enter a name."
                    } 
                }
            },

            {
                type: "input",
                name: "engineerID",
                message: "What is the Engineer's ID?",
                validate: idInput => {
                    const pass = idInput.match(
                        /^[1-9]\d*$/
                      );
                    if (pass) {
                        return true
                    } else {
                        return "Please enter a Valid ID."
                    } 
                }
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "What is the Engineer's email?",
                validate: emailInput => {
                    const pass = emailInput.match(
                        /\S+@\S+\.\S+/
                    )
                    if (pass) {
                        return true
                    } else {
                        return "Please enter a valid email."
                    } 
                }
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "What is the Engineer's GitHub?",
                validate: githubInput => {
                    if (githubInput >= '') {
                        return true
                    } else {
                        return "Please atleast 1 character."
                    } 
                }
            },
        ])
        .then(answers => {
            const engineer = new Engineer(answers.engineerEmail, answers.engineerName, answers.engineerID, answers.engineerGithub);
            teamMembers.push(engineer);
            idArr.push(answers.engineerID);
            createTeam();
        });
    }
};

// ADD INTERN THING NEXT

// call this last
appMenu();