const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test(`Engineer`, () => {
    const engineer = new Engineer('Zack', 2, 'zack@gmail.com', 'Crim');

    expect(engineer.name).toBe('Zack');
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe('zack@gmail.com');
    // expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('Crim');
});