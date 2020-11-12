const { test, expect } = require('@jest/globals');
const subtract = require('./subtract');
const sum = require('./subtract')

// 1 + 2 == 3

test('Testing if it is properly subtracting two numbers' , () => {
    expect(subtract(1,2)).toBe(-1);
});