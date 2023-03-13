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
manager_details = [
    {name: 'name', message: 'Enter manager\'s name >>> ', type: 'input'},
    {name: 'id', message: 'Enter manager\'s employee id >>> ', type: 'input'},
    {name: 'officeNum', message: 'Enter the manager\'s office number >>> ', type: 'input'},]
inquirer.prompt(manager_details).then((ans) => {
    console.log(ans.name);
    console.log(ans.id);
    console.log(ans.officeNum);
})


