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

        printList() {
            let currentNode = this.head;
            let ouput = '<head> ';
            while (currentNode !== null) {
                ouput += currentNode.data + ' ';
                currentNode = currentNode.getNextNode();
            }
            ouput += '<tail>';
            console.log(ouput);
        }

        findNodeIteratively(data) {
            let currentNode = this.head;
            while (currentNode !== null) {
                if (currentNode.data === data) {
                    return currentNode;
                }
                currentNode = currentNode.getNextNode();
            }
            return null;
        }

        findNodeRecursively(data, currentNode = this.head) {
            if (currentNode === null) {
                return null;
            }
            if (currentNode.data === data) {
                return currentNode;
            }
            return this.findNodeRecursively(data, currentNode.next);
        }
}

module.exports = LinkedList;