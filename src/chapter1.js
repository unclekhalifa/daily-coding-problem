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
    },

    challenge3: (input) => {
        let sum = 0;
        let indexOfSum = -1;
        for (const [index, value] of input.entries()) {
            sum += value;
            if (sum > 0 && indexOfSum === -1) indexOfSum = index;
            if (sum < 0) {
                sum = 0;
                indexOfSum = -1;
            }
        }

        if (indexOfSum === -1) return 0;
        return input.slice(indexOfSum).reduce((total, num) => total + num);
    },

    challenge4: (input) => {
        const output = [];

        for (const [index, value] of input.entries()) {
            let tracker = 0;
            for (let i = index + 1; i < input.length; i ++) {
                if (value > input[i]) tracker += 1;
            }
            output.push(tracker);
        }

        return output;
    }
};

module.exports = chapter1;