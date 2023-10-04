
class SinglyLinkedList {
    constructor() { // def __init__()
        this.head = null
        this.length = 0
    }

    // Methods

    // Add to Back
    addToBack(val) {
        const newNode = new ListNode(val);

        if (this.head === null) {
            this.head = newNode;
            return this;
        }

        let runner = this.head;

        while (runner.next) {
            runner = runner.next;
        }

        runner.next = newNode;
        return this
    }
    // Add to front
    addToFront(val) {
        const newNode = new ListNode(val);
        const tempHead = this.head;
        this.head = newNode;
        this.head.next = tempHead;
    }

    // Remove from Front
    // Remove from Back

}

class ListNode {
    constructor(val) {
        this.value = val
        this.next = null
    } 
}

const SLL = new SinglyLinkedList();
SLL.addToBack(1);
SLL.addToBack(2);
SLL.addToBack(3);
SLL.addToBack(4);
SLL.addToBack(5);
SLL.addToBack(6);
console.log(SLL.head);

// Add and Remove Your nodes