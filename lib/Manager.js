const Employee = require('./Employee.js');
// TODO: Create a `Boat` class that extends the `Vehicle` class
class Manager extends Employee {
  constructor(fName, lName, id, email, officeNumber){
      super(fName, lName, id, email)
      this.fName = fName;
      this.lName = lName;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
      this.role = 'Manager'
  }
  getRole(){
      return this.role;
  }
}

module.exports = Manager;