const chapter2 = {
    challenge1: (w, s) => {
        const wSorted = chapter2.sortAlphabetical(w);
        const output = [];
        for (let i = 0; i < s.length + 1 - w.length; i++) {
            if (chapter2.sortAlphabetical(s.slice(i, i + w.length)) === wSorted) output.push(i);
        }
        return output;
    },

    challenge2: (input) => {
        const output = [];
        for (const [index, word] of [...input].entries()) {
            for (const [i, w] of [...input].entries()) {
                if (w === word) continue;
                if (`${word + w}` === chapter2.reverseString(`${word + w}`)) output.push([index, i]);
            }
        }
        return output;
    },

    reverseString: (s) => s.split("").reverse().join(""),

    // Helper functions
    sortAlphabetical: (x) => x.toLowerCase().split("").sort().join(""),
};

module.exports = chapter2;