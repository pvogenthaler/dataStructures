function Node(value) {
  this.value = value;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  removeHead() {
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      oldHead.next = null;
    }
    this.length--;
  }

  contains(value) {
    let count = this.length;
    let currNode = this.head;
    while (count) {
      if (currNode.value === value) {
        return true;
      }
      count--;
      currNode = currNode.next;
    }
    return false;
  }
}

let myLinkedList = new(LinkedList);
myLinkedList.addToTail(1);
myLinkedList.addToTail(2);
console.log(myLinkedList.contains(2));  // true
console.log(myLinkedList.contains(3));  // false
console.log(myLinkedList);
myLinkedList.removeHead();
console.log(myLinkedList);
