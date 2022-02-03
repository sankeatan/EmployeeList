class Employee {
    constructor(fName, lName, id, email) {
      this.fName = fName;
      this.lName = lName;
      this.id = id;
      this.email = email;
      this.role = 'Employee';
    }
  
    getName() {
      fullName = `${this.fName} ${this.lName}`;
      return fullName;
    }
    getId() {
      return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
  }
  module.exports = Employee;