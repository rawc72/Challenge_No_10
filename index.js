const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// list of questions based on different type
function getQuestions(type) {
    var questions = [];
    questions.push({ name: 'name', message: `What is the ${type}'s name?` });
    questions.push({ name: 'id', message: `What is the ${type}'s id?` });
    questions.push({ name: 'email', message: `What is the ${type}'s email?` });

    switch (type) {
        case 'Manager':
            questions.push({ name: 'officeNumber', message: `What is the ${type}'s officeNumber?` });
            break;
        case 'Engineer':
            questions.push({ name: 'github', message: `What is the ${type}'s GitHub username?` });
            break;
        case 'Intern':
            questions.push({ name: 'school', message: `What is the ${type}'s school?` });
            break;
        default:
    }

    return questions;
}

// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) return console.log(err);
        console.log('\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log('HTML file is written to ', fileName, ' successfully!');
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n');
    });
}

async function init() {
    var employees = [];

    while (true) {
        let answers = await inquirer.prompt([{
            name: 'continue',
            type: 'list',
            message: 'Do you want to add a new employee?',
            choices: ['Yes', 'No'],
        }, ]);

        if (answers.continue === 'No') {
            break;
        }

        // Determines the employee type that will be input
        let typeAnswers = await inquirer.prompt([{
            name: 'type',
            type: 'list',
            message: 'What type of employee?',
            choices: ['Manager', 'Engineer', 'Intern'],
        }, ]);

        let detailAnswers = await inquirer.prompt(getQuestions(typeAnswers.type));

        switch (typeAnswers.type) {
            case 'Manager':
                employees.push(
                    new Manager( //creation of the manager object
                        detailAnswers.name,
                        detailAnswers.id,
                        detailAnswers.email,
                        detailAnswers.officeNumber
                    )
                );
                break;
            case 'Engineer':
                employees.push(
                    new Engineer( //creation of the engineer object
                        detailAnswers.name,
                        detailAnswers.id,
                        detailAnswers.email,
                        detailAnswers.github
                    )
                );
                break;
            case 'Intern':
                employees.push(
                    new Intern( //creation of the engineer object
                        detailAnswers.name,
                        detailAnswers.id,
                        detailAnswers.email,
                        detailAnswers.school
                    )
                );
                break;
            default:
        }
    }

    writeToFile('./dist/index.html', createHTML(employees));
}

// Function call to initialize app
init();

function createHTML(employees) { //I begin to use the information captured above to use the html
    // code to construct html
    var htmlEmployeeCards = []; //creation of the html employee card.

    employees.forEach((employee) => {
        var type = employee.constructor.name;

        switch (type) {
            case 'Manager':
                htmlEmployeeCards.push(generateManagerCard(employee));
                break;
            case 'Engineer':
                htmlEmployeeCards.push(generateEngineerCard(employee));
                break;
            case 'Intern':
                htmlEmployeeCards.push(generateInternCard(employee));
                break;
        }
    });

    // Use above cards, create the HTML
    return generateHTMLCode(htmlEmployeeCards);
}

function generateManagerCard(manager) {
    // code to generate manager card
    const buffer = fs.readFileSync('./src/manager.html');
    var fileContent = buffer.toString();

    fileContent = fileContent.replace(/{{name}}/g, manager.getName());
    fileContent = fileContent.replace(/{{id}}/g, manager.getId());
    fileContent = fileContent.replace(/{{email}}/g, manager.getEmail());
    fileContent = fileContent.replace(/{{officeNumber}}/g, manager.getOfficeNumber());

    return fileContent;
}

function generateEngineerCard(engineer) {
    // code to generate engineer card
    const buffer = fs.readFileSync('./src/engineer.html');
    var fileContent = buffer.toString();

    fileContent = fileContent.replace(/{{name}}/g, engineer.getName());
    fileContent = fileContent.replace(/{{id}}/g, engineer.getId());
    fileContent = fileContent.replace(/{{email}}/g, engineer.getEmail());
    fileContent = fileContent.replace(/{{github}}/g, engineer.getGithub());

    return fileContent;
}

function generateInternCard(intern) {
    // code to generate intern card
    const buffer = fs.readFileSync('./src/intern.html');
    var fileContent = buffer.toString();

    fileContent = fileContent.replace(/{{name}}/g, intern.getName());
    fileContent = fileContent.replace(/{{id}}/g, intern.getId());
    fileContent = fileContent.replace(/{{email}}/g, intern.getEmail());
    fileContent = fileContent.replace(/{{school}}/g, intern.getSchool());

    return fileContent;
}

function generateHTMLCode(employeeCards) {
    var out = [];
    var count = 0;
    var row = [];
    employeeCards.forEach((employee) => {
        row.push(employee);
        count++;
        // Maximum 4 cards per row
        if (count % 4 === 0 || count === employeeCards.length) {
            out.push('<div id="futureCards" class="futureCards">');
            out.push(row.join(''));
            out.push('</div>');
            row = [];
        }
    });

    // code to generate intern card
    const buffer = fs.readFileSync('./src/template.html');
    var fileContent = buffer.toString();

    fileContent = fileContent.replace('{{ToBeReplace}}', out.join(''));

    return fileContent;
}