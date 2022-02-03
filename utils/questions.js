const inquirer = require('inquirer');
const htmlPageGenerator = require('./htmlPageGenerator');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

var employeeList = [];


function questions(){
    inquirer.prompt([
        {
            type: 'input',
            message: `Employee's first name?`,
            name: 'fName'
        },
        {
            type: 'input',
            message: `Employee's last name?`,
            name: 'lName'
        },
        {
            type: 'number',
            message: 'Employee ID Number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Employee email address?',
            name: 'email'
        },
        {
            type: 'list',
            message: `Select employee's role:`,
            name: 'role',
            choices: ["Intern", "Engineer", "Manager"]
        }
    ])
    .then((answers) => {
        var fName = answers.fName;
        var lName = answers.lName;
        var id = answers.id;
        var email = answers.email;
        var school ='';
        var gitHub ='';
        var officeNumber = '';
        if (answers.role == 'Intern'){
            inquirer.prompt([{
                type: 'input',
                message: `Intern's school?`,
                name: 'school',
                }])
                .then((answer) => {
                    school = answer.school;
                    var newIntern = new Intern(fName, lName, id, email, school);
                    employeeList.push(newIntern);
                    nextQuestion();
                })
            
        } else if (answers.role == 'Engineer'){
            inquirer.prompt([{
                type: 'input',
                message: `Engineer's github account?`,
                name: 'gitHub',
                }])
                .then((answer) => {
                    gitHub = answer.gitHub;
                    var newEngineer = new Engineer(fName, lName, id, email, gitHub);
                    employeeList.push(newEngineer);
                    nextQuestion();
                })
            
        } else {
            inquirer.prompt([{
                type: 'input',
                message: `Manager's office number?`,
                name: 'officeNumber',
                }])
                .then((answer) => {
                    officeNumber = answer.officeNumber;
                    var newManager = new Manager(fName, lName, id, email, officeNumber);
                    employeeList.push(newManager);
                    nextQuestion();
                })
            
        }
      });
}


function nextQuestion (){
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Enter another employee?',
            name: 'nextQuestion'
        }
    ])
    .then((answers) => {
        if (answers.nextQuestion === true){
            questions();
        } 
        else {
            htmlPageGenerator(employeeList);
        }
    })
}

module.exports = questions;