const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        }

        addToHead(data) {
            const newHead = new Node(data);
            const currentHead = this.head;
            if (currentHead) {
                newHead.setNextNode(currentHead);
            }
            this.head = newHead;
        }

        addToTail(data) {
            let tail = this.head;
            if (!tail) {
                this.head = new Node(data);
                return;
            }
            while (tail.getNextNode()) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }

        removeHead() {
            if (!this.head) {
                return null;
            }
            const removedHead = this.head;
            this.head = removedHead.getNextNode();
            return removedHead.data;
        }
}

module.exports = LinkedList;