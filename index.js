const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const manager_details = [
    {name: 'name', message: 'Enter manager\'s name >>> ', type: 'input'},
    {name: 'id', message: 'Enter manager\'s employee id >>> ', type: 'input'},
    {name: 'officeNum', message: 'Enter the manager\'s office number >>> ', type: 'input'},]
inquirer.prompt(manager_details).then((ans) => {
    console.log(ans.name);
    console.log(ans.id);
    console.log(ans.officeNum);
})

const team = [{name: 'team', message: '', type: 'list', choices: ['Add an engineer', 'Add an intern', 'Finish Building the team']}];
let choice = '';
const engineer_details = [
    {name: 'name', message: 'Enter engineer\'s name >>> ', type: 'input'},
    {name: 'id', message: 'Enter engineer\'s employee id >>> ', type: 'input'},
    {name: 'officeNum', message: 'Enter the engineer\'s email >>> ', type: 'input'},
    {name: 'userName', message: 'Enter the engineer\'s github user name', type: 'input'},
]

const intern_details = [
    {name: 'name', message: 'Enter intern\'s name >>> ', type: 'input'},
    {name: 'id', message: 'Enter the intern\'s employee id >>> ', type: 'input'},
    {name: 'officeNum', message: 'Enter the intern\'s email >>> ', type: 'input'},
    {name: 'userName', message: 'Enter the intern\'s school', type: 'input'},
]
while (choice !== 'Finish Building the team') {
    inquirer.prompt(team).then((ans) => {
        if (ans.team === 'Add an engineer') {
            inquirer.prompt(engineer_details).then((ans) => {
                console.log(ans);
            })
        }
        else if (ans.team === 'Add an intern') {
            inquirer.prompt(intern_details).then((ans) => {
                console.log(ans);
            })
        }
        choice = ans.team;
    })
}