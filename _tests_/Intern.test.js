
const Intern = require('../lib/Intern.js');

describe('Intern class', () => {
  it('Creates a new Intern', () => {
    const intern = new Intern('Jane', 'Doe', 123, 'janedoe@email.com', 'UCF');

    expect(intern).toBeInstanceOf(Intern);
  });
  it('Intern has a fName', () => {
    const intern = new Intern('Jane', 'Doe', 123, 'janedoe@email.com', 'UCF');
    const { fName } = intern;
    
    expect(fName).toBeTruthy();
    expect(fName).toBe('Jane');
  });
  it('Intern has a lName', () => {
    const intern = new Intern('Jane', 'Doe', 123, 'janedoe@email.com', 'UCF');
    const { lName } = intern;
    
    expect(lName).toBeTruthy();
    expect(lName).toBe('Doe');
  });
  it('Intern has id', () => {
    const intern = new Intern('Jane', 'Doe', 123, 'janedoe@email.com', 'UCF');
    const { id } = intern;
    
    expect(id).toBeTruthy();
    expect(id).toBe(123)
  });
  it('Intern has an email', () => {
    const intern = new Intern('Jane', 'Doe', 123, 'janedoe@email.com', 'UCF');
    const { email } = intern;
    
    expect(email).toBeTruthy();
    expect(email).toBe('janedoe@email.com')
  });
  it('Intern has a role', () => {
    const intern = new Intern('Jane', 'Doe', 123, 'janedoe@email.com', 'UCF');
    const { role } = intern;
    
    expect(role).toBeTruthy();
    expect(role).toBe('Intern');
  });
  it('Intern has a school', () => {
    const intern = new Intern('Jane', 'Doe', 123, 'janedoe@email.com', 'UCF');
    const { school } = intern;
    
    expect(school).toBeTruthy();
    expect(school).toBe('UCF');
  });
});