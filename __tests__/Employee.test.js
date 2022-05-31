const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test(`Employee`, () => {
    const employee = new Employee('Moose', 1, 'moose@gmail.com');

    expect(employee.name).toBe('Moose');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('moose@gmail.com');
    // expect(employee.role).toBe(role);
});