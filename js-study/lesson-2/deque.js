const Stack = require('./stack.js')

class Deque extends Stack {
    popFront() {
        return this.data.shift();
    }
    pushFront(x) {
        this.data.unshift(x);
    }
};

a = new Deque();
b = Stack.fromArray([2, 3]);
a.push(1);
a.push(2);
a.pushFront(3);
console.log(a.pop());
console.log(a.popFront());
console.log(a.pop());
console.log(b.pop());
c = Deque.fromArray([3, 2, 1]); // returns stack

