
const Engineer = require('../lib/Engineer.js');

describe('Engineer class', () => {
  it('Creates a new Engineer', () => {
    const engineer = new Engineer('Jane', 'Doe', 123, 'janedoe@email.com', 'github.com/engineer');

    expect(engineer).toBeInstanceOf(Engineer);
  });
  it('Engineer has a fName', () => {
    const engineer = new Engineer('Jane', 'Doe', 123, 'janedoe@email.com', 'github.com/engineer');
    const { fName } = engineer;
    
    expect(fName).toBeTruthy();
    expect(fName).toBe('Jane');
  });
  it('Engineer has a lName', () => {
    const engineer = new Engineer('Jane', 'Doe', 123, 'janedoe@email.com', 'github.com/engineer');
    const { lName } = engineer;
    
    expect(lName).toBeTruthy();
    expect(lName).toBe('Doe');
  });
  it('Engineer has id', () => {
    const engineer = new Engineer('Jane', 'Doe', 123, 'janedoe@email.com', 'github.com/engineer');
    const { id } = engineer;
    
    expect(id).toBeTruthy();
    expect(id).toBe(123)
  });
  it('Engineer has an email', () => {
    const engineer = new Engineer('Jane', 'Doe', 123, 'janedoe@email.com', 'github.com/engineer');
    const { email } = engineer;
    
    expect(email).toBeTruthy();
    expect(email).toBe('janedoe@email.com')
  });
  it('Engineer has a role', () => {
    const engineer = new Engineer('Jane', 'Doe', 123, 'janedoe@email.com', 'github.com/engineer');
    const { role } = engineer;
    
    expect(role).toBeTruthy();
    expect(role).toBe('Engineer');
  });
  it('Engineer has github', () => {
    const engineer = new Engineer('Jane', 'Doe', 123, 'janedoe@email.com', 'github.com/engineer');
    const { gitHub } = engineer;
    
    expect(gitHub).toBeTruthy();
    expect(gitHub).toBe('github.com/engineer');
  });
});