const minLength = require('./solution');

describe('test minLength', () => {
    it('should return the minimum length of string after removing substrings', () => {
        expect(minLength("ABFCACDB")).toBe(2);
        expect(minLength("ACBBD")).toBe(5);
    });
});