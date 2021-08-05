const {
    challenge1
} = require("../chapter2");

describe("Chapter 2: Strings", () => {

    test("Find anagram indices", () => {
        expect(challenge1("ab", "abxaba")).toEqual([0, 3, 4]);
    });
});