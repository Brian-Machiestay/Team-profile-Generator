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
employees = [];
async function build_team() {
    const manager_details = [
        {name: 'name', message: 'Enter manager\'s name >>> ', type: 'input'},
        {name: 'id', message: 'Enter manager\'s employee id >>> ', type: 'input'},
        {name: 'officeNum', message: 'Enter the manager\'s office number >>> ', type: 'input'},
        {name: 'email', message: 'Enter manager\'s email addr >>> ', type: 'input'}
    ]
    await inquirer.prompt(manager_details).then((ans) => {
        man = new Manager(ans.name, ans.id, ans.email, ans.officeNum);
        employees.push(man);
    })

    const team = [{name: 'team', message: 'Build your team', type: 'list', choices: ['Add an engineer', 'Add an intern', 'Finish Building the team']}];
    let choice = '';
    const engineer_details = [
        {name: 'name', message: 'Enter engineer\'s name >>> ', type: 'input'},
        {name: 'id', message: 'Enter engineer\'s employee id >>> ', type: 'input'},
        {name: 'email', message: 'Enter the engineer\'s email >>> ', type: 'input'},
        {name: 'userName', message: 'Enter the engineer\'s github user name', type: 'input'},
    ]

    const intern_details = [
        {name: 'name', message: 'Enter intern\'s name >>> ', type: 'input'},
        {name: 'id', message: 'Enter the intern\'s employee id >>> ', type: 'input'},
        {name: 'email', message: 'Enter the intern\'s email >>> ', type: 'input'},
        {name: 'school', message: 'Enter the intern\'s school', type: 'input'},
    ]
    while (choice !== 'Finish Building the team') {
        const ans = await inquirer.prompt(team);
        if (ans.team === 'Add an engineer') {
            const eng_ans = await inquirer.prompt(engineer_details);
            const ob = new Engineer(eng_ans.name, eng_ans.id, eng_ans.email, eng_ans.userName);
            employees.push(ob);
        }
        else if (ans.team === 'Add an intern') {
            const int_ans = await inquirer.prompt(intern_details);
            const obj = new Intern(int_ans.name, int_ans.id, int_ans.email, int_ans.school);
            employees.push(obj); 
        }
        choice = ans.team;
    }
}

async function build() {
    await build_team().then();
    console.log(render(employees))
    console.log(employees);
}

build();
