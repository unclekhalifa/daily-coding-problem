const chapter1 = {
    challenge1: (input) => {
        const output = [];
        for (const [index] of input.entries()) {
            const tmpArr = [...input];
            tmpArr[index] = 1;
            output.push(tmpArr.reduce((total, num) => total * num));
        }
        return output;
    },

    challenge2: (input) => {
        const sortedInput = [...input].sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
        const window = [];
        for (const [index, value] of input.entries()) {
            if (value !== sortedInput[index]) window.push(index);
        }
        return [window[0], window.slice(-1)[0]];
    }
};

module.exports = chapter1;