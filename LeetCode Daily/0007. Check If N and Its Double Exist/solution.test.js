const checkIfExist = require('./solution.js');

describe('checkIfExist', () => {
    test('test case 1', () => {
        const arr = [10, 2, 5, 3];
        const output = true;
        const result = checkIfExist(arr);
        expect(result).toBe(output);
    });
    test('test case 2', () => {
        const arr = [7, 1, 14, 11];
        const output = true;
        const result = checkIfExist(arr);
        expect(result).toBe(output);
    });
    test('test case 3', () => {
        const arr = [3, 1, 7, 11];
        const output = false;
        const result = checkIfExist(arr);
        expect(result).toBe(output);
    });
    test('test case 4', () => {
        const arr = [-2, 0, 10, -19, 4, 6, -8];
        const output = false;
        const result = checkIfExist(arr);
        expect(result).toBe(output);
    });
    test('test case 5', () => {
        const arr = [0, 0];
        const output = true;
        const result = checkIfExist(arr);
        expect(result).toBe(output);
    });
});