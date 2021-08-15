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

    challenge3: (str, k) => {
        const n = str.length;

        for (let row = 0; row < k; row ++) {
            let i = row;
            const line = [];
            for (let j = 0; j < n; j++) line.push(" ");

            while (i < n) {
                line[i] = str[i];
                const desc = chapter2.isDescending(i, k);
                const spaces = chapter2.getSpaces(row, desc, k);
                i += spaces + 1;
            }
            console.log(line.join(""));
        }

        return true;
    },

    // Helper functions
    sortAlphabetical: (x) => x.toLowerCase().split("").sort().join(""),

    reverseString: (s) => s.split("").reverse().join(""),

    getSpaces: (row, desc, k) => {
        const maxSpaces = (k - 1) * 2 - 1;
        return desc ? maxSpaces - row * 2 : maxSpaces - (k - 1 - row) * 2;
    },

    isDescending: (index, k) => index % (2 * (k - 1)) < k - 1
};

chapter2.challenge3("thisisazigzag", 4);

module.exports = chapter2;