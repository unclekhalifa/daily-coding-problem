const {
    challenge1,
    challenge2,
    challenge3
} = require("../chapter2");

describe("Chapter 2: Strings", () => {

    test("Find anagram indices", () => {
        expect(challenge1("ab", "abxaba")).toEqual([0, 3, 4]);
    });

    test("Generate palindrome pairs", () => {
        expect(
            challenge2(["code", "edoc", "da", "d"])).toEqual([
                [0, 1],
                [1, 0],
                [2, 3]
            ]
        );
    });

    test("Print zigzag form", () => {
        expect(challenge3("thisisazigzag", 4)).toEqual(true);
    });
});