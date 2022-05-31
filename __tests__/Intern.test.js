const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test(`Intern`, () => {
    const intern = new Intern('Andy', 3, 'andy@gmail.com', 'MU');

    expect(intern.name).toBe('Andy');
    expect(intern.id).toBe(3);
    expect(intern.email).toBe('andy@gmail.com');
    // expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('MU');
});