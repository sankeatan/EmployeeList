
const Manager = require('../lib/Manager');

describe('Manager class', () => {
  it('Creates a new instance of Manager', () => {
    const manager = new Manager('Jane', 'Doe', 321, 'janedoe@email.com', 453);

    expect(manager).toBeInstanceOf(Manager);
  });
  it('Manager has a fName, and it is Jane', () => {
    const manager = new Manager('Jane', 'Doe', 123, 'janedoe@email.com', 453);
    const { fName } = manager;
    
    expect(fName).toBeTruthy();
    expect(fName).toBe('Jane');
  });
  it('Manager has a lName, and it is Doe', () => {
    const manager = new Manager('Jane', 'Doe', 123, 'janedoe@email.com', 453);
    const { lName } = manager;
    
    expect(lName).toBeTruthy();
    expect(lName).toBe('Doe')
  });
  it('Manager has id, and it is 123', () => {
    const manager = new Manager('Jane', 'Doe', 123, 'janedoe@email.com', 453);
    const { id } = manager;
    
    expect(id).toBeTruthy();
    expect(id).toBe(123);
  });
  it('Manager has an email, and it is janedoe@email.com', () => {
    const manager = new Manager('Jane', 'Doe', 123, 'janedoe@email.com', 453);
    const { email } = manager;
    
    expect(email).toBeTruthy();
    expect(email).toBe('janedoe@email.com');
  });
  it('Manager has an office and it is 453', () => {
    const manager = new Manager('Jane', 'Doe', 123, 'janedoe@email.com', 453);
    const { officeNumber } = manager;
    
    expect(officeNumber).toBeTruthy();
    expect(officeNumber).toBe(453)
  });
  it('Manager has a role and it is Manager', () => {
    const manager = new Manager('Jane', 'Doe', 123, 'janedoe@email.com', 453);
    const { role } = manager;
    
    expect(role).toBeTruthy();
    expect(role).toBe('Manager');
  });
});
