const inquirer = require('inquirer');

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
        super(name,id,email);
        this.officeNumber = officeNumber;

    }

    getHtml() {
        return `<h1>Hi there my name is ${this.name}, and I am the manager`;

    }


}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name,id,email);
        this.github = github
    }

    getHtml() {
        return `<h1>Hi there my name is ${this.name}, and I am an Engineer. My Github profile is ${this.github}`;
}

}

class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);
        this.school = school;

    }

    getHtml() {
        return `<h1>Hi there my name is ${this.name}, and I am an Intern. I am a student at ${this.school}`;

    
}
    
}

class Company {
    constructor(name) {
        this.name=name;
        this.team=[];

    }

    addManager(name,id,email,officeNumber) {
    this.team.push(new Manager(name,id,email,officeNumber));
    }

    addIntern(name,id,email,officeNumber) {
    this.team.push(new Intern(name,id,email,school));
}

    addEngineer(name,id,email,github) {
    this.team.push(new Engineer(name,id,email,github));
}


    addEmployee(type,name,id,email,data) {
    switch(type) {
        case "manager":
            return this.addManager(type,name,id,email,data)
        case "engineer":
            return this.addEngineer(type,name,id,email,data)
        case "intern":
            return this.addIntern(type,name,id,email,data)
            
    }
}


}

