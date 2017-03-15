function Stack() {
  this.storage = {};
  this.start = 0;
  this.end = 0;
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.end] = value;
  this.length++;
  this.end++;
}

Stack.prototype.pop = function() {
  delete this.storage[this.start];
  this.start++;
  this.length--;
}

Stack.prototype.size = function() {
  return this.length;
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack);
console.log(myStack.size());
myStack.pop();
console.log(myStack);
console.log(myStack.size());
