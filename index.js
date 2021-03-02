const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path")
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
            choices: ["Engineer", "Intern", "N/A"]
        },
    ]).then(data => {
        if(data.choice === "Engineer") {
            addEngineer()
        }else if(data.choice === "Intern") {
            addIntern()
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
            name: "enginnerOfficeNum",
            message: "What is the engineer's office number?"
        },
    ]).then(data => {
        const engineer = Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerOfficeNum)
        team.push(engineer)
        console.log(team)
        // call the ask question function
        askQuestion()
    })
}
