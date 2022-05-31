const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('Manager', () => {
    const manager = new Manager('Vaughn', 4, 'vaughn@gmail.com', 42);

    expect(manager.name).toBe('Vaughn');
    expect(manager.id).toEqual(4);
    expect(manager.email).toBe('vaughn@gmail.com');
    // expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toBe(42);
});