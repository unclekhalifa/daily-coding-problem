const chapter2 = {
    challenge1: (w, s) => {
        const occurrences = [];
        let wLength = w.length;
        let currentStrOccurrencePosition = 0;

        let originalWord = s.slice();
        while (originalWord.indexOf(w) !== -1) {
            let index = originalWord.indexOf(w);
            if (currentStrOccurrencePosition === 0) occurrences.push(index);
            else occurrences.push(index + wLength);
            currentStrOccurrencePosition = index + wLength;
            originalWord = originalWord.replace(w, "");
        }

        originalWord = s.split("").reverse().join("");

        return occurrences;
    },

    challenge2: () => {
        
    }
};

module.exports = chapter2;