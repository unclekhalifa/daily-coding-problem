const {
    challenge1,
    challenge2
} = require("../chapter1");

describe("Chapter 1: Arrays", () => {

    test("Should return product of all other elements in array save itself", () => {
        expect(challenge1([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
        expect(challenge1([3, 2, 1])).toEqual([2, 3, 6]);
    });

    test("Locate smallest window to be sorted", () => {
        expect(challenge2([3, 7, 5, 6, 9])).toEqual([1, 3]);
    });
});