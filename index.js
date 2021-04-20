const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const Employee = require("./lib/Employee");
const team = []


addManager()
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's Id?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's Email?"
        },
        {
            type: "input",
            name: "managerOfficeNum",
            message: "What is the manager's office number?"
        },
    ]).then(data => {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNum)
        team.push(manager)
        console.log(team)
        // call the ask question function
        askQuestion()
    })
}

function askQuestion() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Which type of employee would you like to add?",
            choices: ["Engineer", "Intern", "Manager", "Employee"]
        },
    ]).then(data => {
        if(data.choice === "Engineer") {
            addEngineer()
        }else if(data.choice === "Intern") {
            addIntern()
        }else if(data.choice === "Manager") {
            addManager()
        }else if(data.choice === "Employee") {
            addEmployee()
        }else{
            buildHtml()
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the engineer's Id?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the engineer's Email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's github name?"
        },
    ]).then(data => {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
        team.push(engineer)
        console.log(team)
        // call the ask question function
        askQuestion()
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the Interns name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the Interns Id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the Interns Email?"
        },
        {
            type: "input",
            name: "internSchoolName",
            message: "What is the Interns school name?"
        },
    ]).then(data => {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchoolName)
        team.push(intern)
        console.log(team)
        // call the ask question function
        askQuestion()
    })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is the Employees name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is the Employees Id?"
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "What is the Employees Email?"
        },
    ]).then(data => {
        const employee = new Employee(data.employeeName, data.employeeId, data.employeeEmail)
        team.push(employee)
        console.log(team)
        // call the ask question function
        askQuestion()
    })
}