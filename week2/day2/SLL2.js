
class SinglyLinkedList {
    constructor() { // def __init__()
        this.head = null
        this.length = 0
    }

    // Methods

    insert(val, index=null) {
        console.log(index);
        const newNode = new ListNode(val);

        if (!this.head) {
            this.head = newNode;
            this.head.next = null;
            return this;
        }

        let runner = this.head;
        let prev = this.head
        let currentNode = -1

        if (index === null) {
            while (runner.next) {
                runner = runner.next
            }
            runner.next = newNode;
            newNode.next = null;
            return this
        }


        while ((currentNode < index) && (runner.next)) {
            prev = runner
            runner = runner.next
            currentNode++
            
        }
        prev.next = newNode
        newNode.next = runner
        
        this.length++
        return this;
    }

    // Remove

    remove(index=null) {
        if (!this.head) return this;

        let prev = this.head
        let runner = this.head
        let currentNode = -1;

        if (index === 0) {
            this.head = this.head.next;
            return this;
        }

        if (index === null) {
            while (runner.next.next) {
                runner = runner.next
            }
            runner.next = null;
            return this;
        }

        while (currentNode < index && runner.next) {
            prev = runner;
            runner = runner.next
            currentNode++
        }

        prev.next = runner.next
        runner.next = null;

        return this;


    }

    // Display
    display() {
        let runner = this.head
        let resultString = "";

        while (runner) {
            console.log("running")
            resultString+= `(${runner.value}) -> `;
            runner = runner.next
        }
        resultString+="null";
        console.log(resultString)
    }

    static fromArray(arr) {
        const sll = new SinglyLinkedList();
        for (let val of arr) {
            sll.insert(val)
        }

        return sll;
    }

}

class ListNode {
    constructor(val) {
        this.value = val
        this.next = null
    } 
}

const SLL = SinglyLinkedList.fromArray([1,2,3,4,5])
SLL.display();

// Add and Remove Your nodes