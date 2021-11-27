class Manager{
    constructor (name, id, email, officenumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officenumber = officenumber;
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getOfficeNumber () {
        return this.officenumber;
    }
     
};

module.exports = Manager;