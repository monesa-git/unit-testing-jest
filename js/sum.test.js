const { test, expect } = require('@jest/globals')
const sum = require('./sum')

// 1 + 2 == 3

test('Testing if it is properly adding two numbers' , () => {
    expect(sum(1,2)).toBe(3);
});