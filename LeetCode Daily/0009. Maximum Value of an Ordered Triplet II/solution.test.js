const maximumTripletValue = require('./solution.js');

describe('maximumTripletValue', () => {
    test('test case 1', () => {
        const nums = [1, 2, 3, 4];
        const output = 4;
        const result = maximumTripletValue(nums);
        expect(result).toBe(output);
    });
    test('test case 2', () => {
        const nums = [1, 2];
        const output = 0;
        const result = maximumTripletValue(nums);
        expect(result).toBe(output);
    });
    test('test case 3', () => {
        const nums = [5, 1, 3, 2, 4];
        const output = 12;
        const result = maximumTripletValue(nums);
        expect(result).toBe(output);
    });
});
