// TODO: Import the parent class
const Employee = require('./Employee.js');
// TODO: Create a `Boat` class that extends the `Vehicle` class
class Engineer extends Employee {
    constructor(fName, lName, id, email, gitHub){
        super(fName, lName, id, email)
        this.fName = fName;
        this.lName = lName;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
        this.role = 'Engineer'
    }

  getGitHub(){
      return this.gitHub;
  }
  getRole(){
      return this.role;
  }
}
module.exports = Engineer;