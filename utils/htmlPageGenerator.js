const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const fs = require('fs');

var employeeCards = [];

const htmlTop = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
        crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <header>
    <div class="navbar bg-danger">
        <div class="justify-content-center container text-white">
            <strong>My Team</strong>
        </div>
    </div>
    <header>
    <body>
        <main>
        <div class="container">
`; 
const rowContainerTop = `
        <div class="row justify-content-evenly">
            
`;
const rowContainerBottom = `
        </div>
`
const htmlBottom = `
        </div>
        </main>
        <script src="/docs/5.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
</html>
`;

function generateEmployeeCards(employeeList){
    console.log('generate EmployeeCard employee list:'+ employeeList)
    for(var employee of employeeList){
        console.log('Employee:' + employee);
        if(employee.role == 'Manager'){
            var managerHTMLCard = `
            <div class="col">
              <div class="card">
                <h2>${employee.fName}</h2>
                <h2><svg xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    class="bi bi-cup" 
                    viewBox="0 0 16 16">
                    <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
                    </svg>${employee.role}</h2>
                <div class="container">
                    <div class="row">ID: ${employee.id}</div>
                    <div class="row">Email: ${employee.email}</div>
                    <div class="row">Office Number: ${employee.officeNumber}</div>
                </div>
              </div>
            </div>`
            employeeCards.push(managerHTMLCard);
        } else if(employee.role == 'Engineer'){
            var engineerHTMLCard = `
            <div class="col">
              <div class="card">
                <h2>${employee.fName}</h2>
                <h2><svg xmlns="http://www.w3.org/2000/svg"
                width="16" 
                height="16" 
                fill="currentColor" 
                class="bi bi-eyeglasses" 
                viewBox="0 0 16 16">
                <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                </svg>${employee.role}</h2>
                <div class="container">
                    <div class="row">ID: ${employee.id}</div>
                    <div class="row">Email: ${employee.email}</div>
                    <div class="row">GitHub: ${employee.gitHub}</div>
                </div>
              </div>
            </div>`;
            employeeCards.push(engineerHTMLCard);
        } else {
            var internHTMLCard = `
            <div class="col">
              <div class="card">
                <h2>${employee.fName}</h2>
                <h2><svg xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                class="bi bi-mortarboard-fill" 
                viewBox="0 0 16 16">
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
                </svg>${employee.role}</h2>
                <div class="container">
                    <div class="row">ID: ${employee.id}</div>
                    <div class="row">Email: ${employee.email}</div>
                    <div class="row">School: ${employee.school}</div>
                </div>
              </div>
            </div>`;
            employeeCards.push(internHTMLCard);
        }
    }
}

function writeToFile(content) {
    fs.writeFile('index.html', content, (err) =>
        err ? console.log(err) : console.log('Successfully created My Team html!'))
  }

function htmlPageGenerator (employeeList){
    var htmlIndex = htmlTop;
    console.log('htmlPageGenerator employeeList:'+employeeList);
    console.log(employeeList[0].fName);
    generateEmployeeCards(employeeList);
    for (let i = 0; i<employeeCards.length; i++){
        if(i==0){
            htmlIndex += rowContainerTop;
            htmlIndex += employeeCards[i];
        } else if (i%3 == 0){
            htmlIndex += rowContainerBottom;
            htmlIndex += rowContainerTop;
            htmlIndex += employeeCards[i];
        } else {
            htmlIndex += employeeCards[i];
        }

    }
    htmlIndex += rowContainerBottom;
    htmlIndex += htmlBottom;
    writeToFile(htmlIndex);
}

module.exports = htmlPageGenerator;