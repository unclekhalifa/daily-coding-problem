const {
    challenge1
} = require("../chapter4");

describe("Chapter 4: Stacks & Queues", () => {

    test("Implement a max stack", () => {
        // Check push functionality
        challenge1.push(4);
        expect(challenge1.stack.length).toBe(1);

        // Check pop functionality
        expect(challenge1.pop()).toBe(4);
        expect(challenge1.pop()).toBe(-1);

    });

});