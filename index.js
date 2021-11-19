const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");

const promptUser = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'company'
    }])
}
    

class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getHtml() {
        return `<h1> Hi there my name is ${this.name}<h1>`;
    }
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getHtml() {
        return `<h1>Hi there my name is ${this.name}, and I am a manager. My office number is ${this.officeNumber}`;
    }

    getMyCard() {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${this.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">Office number: ${this.officeNumber}</li>
            </ul>
        </div>
        </div>
        `;

    }

}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
    }

    getHtml() {
        return `<h1>Hi there my name is ${this.name}, and I am an Engineer. My Github profile is ${this.github}`;
    }

    getMyCard() {
        return `
       <div class="card employee-card">
       <div class="card-header">
           <h2 class="card-title">${this.name}</h2>
           <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Engineer</h3>
       </div>
       <div class="card-body">
           <ul class="list-group">
               <li class="list-group-item">ID: ${this.id}</li>
               <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
               <li class="list-group-item">Github: ${this.github}</li>
           </ul>
       </div>
       </div>
       `;

    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getHtml() {
        return `<h1>Hi there my name is ${this.name}, and I am an Intern. I am a student at ${this.school}`;
    }
    // need to style card classes
    getMyCard() {
        return `
       <div class="card employee-card">
       <div class="card-header">
           <h2 class="card-title">${this.name}</h2>
           <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Intern</h3>
       </div>
       <div class="card-body">
           <ul class="list-group">
               <li class="list-group-item">ID: ${this.id}</li>
               <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
               <li class="list-group-item">School: ${this.school}</li>
           </ul>
       </div>
       </div>
       `;

    }
}

function generateTeamCards(team) {
    //go through team array for each item call get my card function, console log test
    let cards = ""

    for (employee of team) {
        cards += employee.getMyCard();
    }

    return cards;
}

class Company {
    constructor(name) {
        this.name = name;
        this.team = [];

    }

    addManager(name, id, email, officeNumber) {
        let manager = new Manager(name, id, email, officeNumber);
        this.team.push(manager);
        return manager;
    }

    addIntern(name, id, email, school) {
        let intern = new Intern(name, id, email, school);
        this.team.push(intern);
        return intern;
    }

    addEngineer(name, id, email, github) {
        let engineer = new Engineer(name, id, email, github);
        this.team.push(engineer);
        return engineer;
    }

    addEmployee(type, name, id, email, data) {
        switch (type) {
            case "manager":
                return this.addManager(type, name, id, email, data);
            case "engineer":
                return this.addEngineer(type, name, id, email, data);
            case "intern":
                return this.addIntern(type, name, id, email, data);
            default:
                throw Error("Employee type not supported");
        }
    }

    getHtml() {
        let teamCards = generateTeamCards(this.team)

        // here we must do a template closer to the example, need to prompt the employees to fill out their information. 
        return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Company Roster 2021</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css"> 
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>

        <body>

        <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading">
                        <h1 class="text-center">My Team Roster</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center"> 
                        ${teamCards}
                    </div>
                </div>
            </div>
        </body>
        </html>
        `;
        // write function called generateTeamCards - team = array (manager, intern, engineer objects) call get my card , also work on style
    }
}

const company = new Company("Tech r us");

company.addManager("Mike Smith", "1", "mike@techrus.com", "564");
company.addEngineer("Jane Doe", "2", "jane@techrus.com", "janedoe");
company.addIntern("Sally Long", "3", "sally@techrus.com", "MIT");

console.log(company.getHtml());
fs.writeFileSync(path.join(process.cwd(), "test.html"), company.getHtml());
