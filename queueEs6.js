class Queue {
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  enqueue(value) {
    this.storage[this.length] = value;
    this.length++;
  }

  dequeue() {
    delete this.storage[this.length - 1];
    this.length--;
  }

  size() {
    return this.length;
  }
}

var myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
console.log(myQueue.size());
