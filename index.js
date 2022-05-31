// Main page fo the application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, 'generatedHTML.html');
// const render = require('./src/page-template');
const teamMembers = [];
const idArr = [];

    function createTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What role are you adding?',
                choices: ['Manager', 'Engineer', 'Intern', 'None']
            },
        ])
        .then(answers => {
            switch(answers.role) {
                case 'Engineer': 
                    addEngineer()
                    break;
                case 'Intern':
                    addIntern()
                    break;
                case 'Manager':
                    addManager()
                    break;
                default:
                    console.log(teamMembers);
                    writeToFile(teamMembers);
            }
        })
    };

    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
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
                name: "id",
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
                name: "email",
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
                name: "officeNumber",
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
            let manager = new Manager(answers.email, answers.name, answers.id, "Manager", answers.officeNumber);
            teamMembers.push(manager);
            idArr.push(answers.id);
            createTeam();
        });
    };

    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
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
                name: "id",
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
                name: "email",
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
                name: "github",
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
            let engineer = new Engineer(answers.email, answers.name, answers.id, "Engineer", answers.github);
            teamMembers.push(engineer);
            idArr.push(answers.id);
            createTeam();
        });
    };

    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Intern's name?",
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
                name: "id",
                message: "What is the Intern's ID?",
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
                name: "email",
                message: "What is the Intern's email?",
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
                name: "school",
                message: "What is the Intern's school?",
                validate: schoolInput => {
                    if (schoolInput >= '') {
                        return true
                    } else {
                        return "Please atleast 1 character."
                    } 
                }
            },
        ])
        .then(answers => {
            let intern = new Intern(answers.email, answers.name, answers.id, "Intern", answers.school);
            teamMembers.push(intern);
            idArr.push(answers.id);
            createTeam();
        });
    };

    const writeToFile = data => {
        const generatedHTML = generateHTML(data);
        return new Promise((resolve, reject) => {
            fs.writeFile('./dist/generatedHTML.html', generatedHTML, err => {
                if (err) {
                    reject(err);
                }
    
                resolve({
                    ok: true,
                    message: 'Success!'
                });
            });
        });
    };

    
function teamMembersToHTML() {
    const teamCards = teamMembers.map(o => {
        switch (o.role) {
            case 'Manager':
                return `
                <div class="col-md-6 col-lg-4">
                    <div class="bg-warning p-3">
                        <div>
                            <div> 
                                <h2>Manager</h2>
                            </div>
                            <ul class="list-group list-group-flush list-unstyled">
                                <li><h3>Name: ${o.getName()}</h3></li>
                                <li>Id: ${o.getId()}</li>
                                <li>Email: <a href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
                                <li>OfficeNumber: ${o.getOffice()}</li>
                            </ul>
                        </div>
                    </div> 
                </div>
                `

            case 'Engineer':
                return `
                <div class="col-md=6 col-lg-4">
                    <div class="bg-warning p-3">
                        <div>
                            <div class='card-header bg-dark'>
                                <h2>Engineer</h2>
                            </div>
                            <ul class="list-group list-group-flush list-unstyled">
                                <li><h3>Name: ${o.getName()}</h3></li>
                                <li>Id: ${o.getId()}</li>
                                <li>Email: <a href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
                                <li>Github: <a href="https://github.com/${o.getGithub()}" target="_blank">${o.getGithub()}</a></li>
                            </ul>
                        </div>
                    </div>
                </div> 
                `

            case 'Intern':
                return `
                <div class="col-md-6 col-lg-4">
                    <div class="bg-warning p-3">
                        <div>
                            <div>
                                <h2>Intern</h2>
                            </div>
                            <ul class="list-group list-group-flush list-unstyled">
                                <li><h3>Name: ${o.getName()}<h3></li>
                                <li>Id: ${o.getId()}</li>
                                <li>Email: <a href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
                                <li>School: ${o.getSchool()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
            default:
                console.log('teamCards success')
                
        }
    });
    return teamCards;
}

const generateHTML = () => {
    const results = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Teaminator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet" />
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="text-center">Teaminator</h1>
        </div>
      </header>
      <main class="container my-5">
        <div class="row">
            ${teamMembersToHTML().join('')}
        </div>
      </main>
    </body>
    </html>
    `;

    return results;
};
// call this last
createTeam();