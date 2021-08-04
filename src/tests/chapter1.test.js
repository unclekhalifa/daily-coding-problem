const {
    challenge1,
    challenge2,
    challenge3,
    challenge4
} = require("../chapter1");

describe("Chapter 1: Arrays", () => {

    test("Should return product of all other elements in array save itself", () => {
        expect(challenge1([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
        expect(challenge1([3, 2, 1])).toEqual([2, 3, 6]);
    });

    test("Locate smallest window to be sorted", () => {
        expect(challenge2([3, 7, 5, 6, 9])).toEqual([1, 3]);
        expect(challenge2([1, 2, 7, 4, 5])).toEqual([2, 4]);
    });

    test("Calculate maximum subarray sum", () => {
        expect(challenge3([34, -50, 42, 14, -5, 86])).toEqual(137);
        expect(challenge3([-5, -1, -8, -9])).toEqual(0);
        expect(challenge3([-5, 2, 3, -4])).toEqual(1);
    });
});