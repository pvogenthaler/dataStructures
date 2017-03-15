function Queue() {
  this.storage = {};
  this.length = 0;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
}

Queue.prototype.dequeue = function() {
  delete this.storage[this.length - 1];
  this.length--;
}

Queue.prototype.size = function() {
  return this.length;
}


var myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
console.log(myQueue.size());
