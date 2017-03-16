class MyArray {
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  add(value) {
    this.storage[this.length] = value;
    this.length++;
    return value;
  }

  remove(value) {
    var index = null;
    for (var i in this.storage) {
      if (this.storage[i] === value) {
        index = i;
      }
    }

    while (this.storage[index + 1]) {
      this.storage[index] = this.storage[index + 1];
      index++;
    }
    delete this.storage[this.length - 1];
    this.length--;
    return value;
  }

  size() {
    return this.length;
  }
}

var array = new MyArray();
array.add(1);
array.add(2);
array.add(3);
console.log(array);
array.remove(3);
console.log(array);
console.log(array.size());
