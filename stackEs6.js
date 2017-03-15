class Stack {
  constructor() {
    this.storage = [];
  }

  push(value) {
    this.storage.push(value);
  }

  pop() {
    this.storage.pop();
  }

  size() {
    return this.storage.length;
  }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack);
console.log(myStack.size());
myStack.pop();
console.log(myStack);
console.log(myStack.size());
