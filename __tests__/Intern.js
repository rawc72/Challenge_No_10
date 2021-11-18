var Intern = require('../lib/Intern.js');

test('Intern class working properly', () => {
    let employee = new Intern('Robert', '003', 'rw@icloud.com', 'UOT');

    expect(employee.getName()).toBe('Robert');
    expect(employee.getId()).toBe('003');
    expect(employee.getEmail()).toBe('rw@icloud.com');
    expect(employee.getSchool()).toBe('UOT');
    expect(employee.getRole()).toBe('Intern');
});