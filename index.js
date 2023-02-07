const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const pageTemplate = require('./src/page-template');

var employeeMembers = [];
var employeeIds= [];
const dirDirectory = path.resolve(__dirname, 'dist');
const dirPath = path.join(dirDirectory, 'index.html');


function buildTeam(data) {
    fs.writeFile(dirPath, pageTemplate(data), (err) => console.log(err))
}

addManager()

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the intern?',
            name: 'name',
        },
        {
            type: 'number',
            message: 'What is the id of the intern?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the email of the intern?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What school did the intern go to?',
            name: 'school',
        },
    ])
    .then(data => {
        employeeMembers.push(new Intern(data.name, data.id, data.email, data.school));
        employeeIds.push(data.id)
        })
    .then(data => createTeam())
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the engineer?',
            name: 'name',
        },
        {
            type: 'number',
            message: 'What is the id of the engineer?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the email of the engineer?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the github link of the engineer?',
            name: 'github',
        },
    ])
    .then(data => {
        employeeMembers.push(new Engineer(data.name, data.id, data.email, data.github));
        employeeIds.push(data.id)
        })
    .then(data => createTeam())
}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the manager?',
            name: 'name',
        },
        {
            type: 'number',
            message: 'What is the id of the manager?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the email of the manager?',
            name: 'email',
        },
        {
            type: 'number',
            message: 'What is the office number of the manager?',
            name: 'office',
        },
    ])
    .then(data => {
        employeeMembers.push(new Manager(data.name, data.id, data.email, data.office));
        employeeIds.push(data.id)
        console.log(`Manager ${data.name} successfully added!`)
        })
    .then(data => createTeam())
}

function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which would you like to add?',
            choices: ['Intern', 'Engineer', 'Finished adding'],
            name: 'option',
        }
    ]).then(data => {
        if (data.option === 'Intern') {
            addIntern()
        } else if (data.option === 'Engineer') {
            addEngineer() 
        } else {
            buildTeam(employeeMembers)
        }
    })
}