class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.length = 0

    # Methods

    # Add to Back
    def addToBack(self,val):
        newNode = ListNode(val)

        if self.head == None:
            self.head = newNode
            return self;

        runner = self.head;

        while runner.next:
            runner = runner.next;

        runner.next = newNode;
        return self
        
    # Add to front
    def addToFront(self,val):
        newNode = ListNode(val)
        tempHead = self.head
        self.head = newNode
        self.head.next = tempHead

    # Remove from Front
    # Remove from Back

class ListNode:
    def __init__(self,val):
        self.value = val
        self.next = None


SLL = SinglyLinkedList();
# Add and Remove Your nodes