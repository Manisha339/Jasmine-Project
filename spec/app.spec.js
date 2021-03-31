var factorial = require('../app');
describe("Factorial Functionality", () => {

    it("should perform factorial for positive numbers", () => {
        const result = factorial(5);
        expect(result).toEqual(120);
    });
    it("should perform factorial for negative numbers", () => {
        const result = factorial(-5);
        expect(result).toEqual(1);
    });
});