var Manager = require('../lib/Manager.js');

test('Manager class working properly', () => {
    let employee = new Manager('Robert', '004', 'rw@icloud.com', 'S00001');

    expect(employee.getName()).toBe('Robert');
    expect(employee.getId()).toBe('004');
    expect(employee.getEmail()).toBe('rw@icloud.com');
    expect(employee.getOfficeNumber()).toBe('S00001');
    expect(employee.getRole()).toBe('Manager');
});