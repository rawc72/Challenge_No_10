var Employee = require('../lib/Employee.js');

test('Employee class working properly', () => {
    let employee = new Employee('Robert', '001', 'rw@icloud.com');

    expect(employee.getName()).toBe('Robert');
    expect(employee.getId()).toBe('001');
    expect(employee.getEmail()).toBe('rw@icloud.com.com');
    expect(employee.getRole()).toBe('Employee');
});