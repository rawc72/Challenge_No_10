var Engineer = require('../lib/Engineer.js');

test('Engineer class working properly', () => {
    let employee = new Engineer('Robert', '002', 'rw@icloud.com', 'RobertGitID');

    expect(employee.getName()).toBe('Robert');
    expect(employee.getId()).toBe('002');
    expect(employee.getEmail()).toBe('rw@icloud.com');
    expect(employee.getGithub()).toBe('RobertGitID');
    expect(employee.getRole()).toBe('Engineer');
});