const maxAscendingSum = require('./solution');

describe("Test maxAscendingSum", () => {
    test("example 1", () => {
        expect(maxAscendingSum([10, 20, 30, 5, 10, 50])).toBe(65);
    });

    test("example 2", () => {
        expect(maxAscendingSum([10, 20, 30, 40, 50])).toBe(150);
    });

    test("example 3", () => {
        expect(maxAscendingSum([12, 17, 15, 13, 10, 11, 12])).toBe(33);
    });

    test("example 4", () => {
        expect(maxAscendingSum([100, 10, 1])).toBe(100);
    });
});