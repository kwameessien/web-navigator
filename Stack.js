const LinkedList = require('./LinkedList');

class Stack {
    constructor(maxSize = Infinity) {
        this.stack = new LinkedList();
        this.maxSize = maxSize;
        this.size = 0;
    }
    
    isEmpty() {
        return this.size === 0;
    }

    hasRoom() {
        return this.size < this.maxSize;
    }

    push(value) {
        if (this.hasRoom()) {
            this.stack.addToHead(value);
            this.size++;
        } else {
            throw new Error('Stack is at max capacity');
        }
    }

    pop() {
        if (!this.isEmpty()) {
            this.size--;
            return this.stack.removeHead();
        } else {
            throw new Error('Stack is empty');
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.stack.head.data;
        } else {
            throw new Error('Stack is empty');
        }
    }
}

module.exports = Stack;