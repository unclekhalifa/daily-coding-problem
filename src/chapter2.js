const chapter2 = {
    challenge1: (w, s) => {
        const wSorted = chapter2.sortAlphabetical(w);
        const output = [];
        for (let i = 0; i < s.length + 1 - w.length; i++) {
            if (chapter2.sortAlphabetical(s.slice(i, i + w.length)) === wSorted) output.push(i);
        }
        return output;
    },

    challenge2: () => {

    },

    // Helper functions
    sortAlphabetical: (x) => x.toLowerCase().split("").sort().join(""),
};

module.exports = chapter2;