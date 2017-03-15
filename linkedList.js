function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.head.next = newNode;
    this.tail = newNode;
  }
  this.length++;
}

LinkedList.prototype.removeHead = function() {
  var oldHead = this.head;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    oldHead.next = null;
  }
  this.length--;
}

LinkedList.prototype.contains = function(value) {
  var currNode = this.head;
  var count = this.length;
  while (count) {
    if (currNode.value === value) {
      return true;
    }
    count--;
    currNode = currNode.next;
  }
  return false;
}

var myLinkedList = new(LinkedList);
myLinkedList.addToTail(1);
myLinkedList.addToTail(2);
console.log(myLinkedList.contains(2));  // true
console.log(myLinkedList.contains(3));  // false
console.log(myLinkedList);
myLinkedList.removeHead();
console.log(myLinkedList);
