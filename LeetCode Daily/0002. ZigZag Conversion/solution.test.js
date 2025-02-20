const ZigZagConversion = require('./solution');

describe('ZigZagConversion', () => {
    test('should return the zigzag conversion of a string', () => {
        const s1 = "PAYPALISHIRING";
        const numRows1 = 3;
        const result1 = ZigZagConversion(s1, numRows1);
        expect(result1).toBe("PAHNAPLSIIGYIR");

        const s2 = "PAYPALISHIRING";
        const numRows2 = 4;
        const result2 = ZigZagConversion(s2, numRows2);
        expect(result2).toBe("PINALSIGYAHRPI");
    });
});