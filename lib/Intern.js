const Employee = require('./Employee.js');
// TODO: Create a `Boat` class that extends the `Vehicle` class
class Intern extends Employee {
    constructor(fName, lName, id, email, school){
        super(fName, lName, id, email)
        this.fName = fName;
        this.lName = lName;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = 'Intern'
    }
  getSchool (){
      return this.school;
  }
  getRole (){
      return this.role;
  }
}
module.exports = Intern;