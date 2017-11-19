class Stack {
    constructor() {
        this.data = [];
    }
    pop() {
        return this.data.pop();
    }

    push(x) {
        this.data.push(x);
    }

    static fromArray(arr = []) {
        let stack = new Stack();
        stack.data = arr;
        return stack;
    }
};

module.exports = Stack;
