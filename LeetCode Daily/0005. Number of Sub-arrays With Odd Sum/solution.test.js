const numOfSubarrays = require('./solution.js');

describe('test numOfSubarrays', () => {
    it('should return the number of sub-arrays with odd sum', () => {
        expect(numOfSubarrays([1, 3, 5])).toBe(4);
        expect(numOfSubarrays([2, 4, 6])).toBe(0);
        expect(numOfSubarrays([1, 2, 3, 4, 5, 6, 7])).toBe(16);
        expect(numOfSubarrays([100, 100, 99, 99])).toBe(4);
        expect(numOfSubarrays([7])).toBe(1);
    });
});