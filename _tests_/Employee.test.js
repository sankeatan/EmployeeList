
const Employee = require('../lib/Employee.js');

describe('Employee class', () => {
  it('Creates a new Employee', () => {
    const employee = new Employee('Jane', 'Doe', 123, 'janedoe@email.com');

    expect(employee).toBeInstanceOf(Employee);
  });
  it('Employee has a fName', () => {
    const employee = new Employee('Jane', 'Doe', 123, 'janedoe@email.com');
    const { fName } = employee;
    
    expect(fName).toBeTruthy();
    expect(fName).toBe('Jane');
  });
  it('Employee has a lName', () => {
    const employee = new Employee('Jane', 'Doe', 123, 'janedoe@email.com');
    const { lName } = employee;
    
    expect(lName).toBeTruthy();
    expect(lName).toBe('Doe');
  });
  it('Employee has id', () => {
    const employee = new Employee('Jane', 'Doe', 123, 'janedoe@email.com');
    const { id } = employee;
    
    expect(id).toBeTruthy();
    expect(id).toBe(123)
  });
  it('Employee has an email', () => {
    const employee = new Employee('Jane', 'Doe', 123, 'janedoe@email.com');
    const { email } = employee;
    
    expect(email).toBeTruthy();
    expect(email).toBe('janedoe@email.com')
  });
  it('Employee has a role', () => {
    const employee = new Employee('Jane', 'Doe', 123, 'janedoe@email.com');
    const { role } = employee;
    
    expect(role).toBeTruthy();
    expect(role).toBe('Employee');
  });
});