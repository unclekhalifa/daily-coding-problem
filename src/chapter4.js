const chapter4 = {
    challenge1: {
        stack: [],

        push (val) {
            this.stack.push(val);
        },

        pop () {
            if (this.stack.length === 0) return -1;
            return this.stack.pop();
        },

        max () {

        }

    },

    challenge2 (str) {
    }
};

module.exports = chapter4;