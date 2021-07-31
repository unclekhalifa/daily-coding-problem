const chapter1 = {
    challenge1: (input) => {
        const output = [];
        for (const [index] of input.entries()) {
            const tmpArr = [...input];
            tmpArr[index] = 1;
            output.push(tmpArr.reduce((total, num) => total * num));
        }
        return output;
    }
};

module.exports = chapter1;