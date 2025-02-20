const findDifferentBinaryString = require('./solution');

describe('findDifferentBinaryString', () => {
    test('should return a unique binary string not in the input array', () => {
        const nums1 = ["01", "10"];
        const result1 = findDifferentBinaryString(nums1);
        expect(nums1).not.toContain(result1);
        expect(result1.length).toBe(nums1[0].length);
    });
});