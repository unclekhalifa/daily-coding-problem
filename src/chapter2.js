const chapter2 = {
    challenge1: (w, s) => {
        const occurrences = [];
        let originalWord = s.slice();
        while (originalWord.indexOf(w) !== -1) {
            let index = originalWord.indexOf(w);
            occurrences.push(originalWord.indexOf(w));
            originalWord = originalWord.replace(w, "");
        }
        originalWord = s.split("").reverse().join("");
        while (originalWord.indexOf(w) !== -1) {
            let index = originalWord.indexOf(w);
            occurrences.push(originalWord.indexOf(w));
            originalWord = originalWord.replace(w, "");
        }

        return occurrences;
    }
};

module.exports = chapter2;