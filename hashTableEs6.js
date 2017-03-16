class HashTable {
  constructor(limit) {
    this.storage = {};
    this.size = 0;
    this.limit = limit;
  }

  hashFunc(key) {
    return key.toString().length % this.limit;
  }

  add(key, value) {
    const hash = this.hashFunc(key);
    if (!this.storage[hash]) {
      this.storage[hash] = {};
    }
    if (!this.storage[hash][key]) {
      this.size++;
    }
    this.storage[hash][key] = value;
  }

  remove(key) {
    const hash = this.hashFunc(key);
    if (this.storage[hash][key]) {
      delete this.storage[hash][key];
      this.size--;
    }
  }

  search(key) {
    const hash = this.hashFunc(key);
    return this.storage[hash][key] ? this.storage[hash][key] : null;
  }

  length() {
    return this.size;
  }
}


const hashTable = new HashTable(3);
hashTable.add('first', 1);
hashTable.add('second', 2);
hashTable.add('third', 3);
hashTable.add('fourth', 4);
hashTable.add('fifth', 5);
console.log(hashTable.length()); // => 5
console.log(hashTable.search('second')); // => 2
hashTable.remove('fourth');
hashTable.remove('first');
console.log(hashTable.search('first')); // => null
console.log(hashTable.length()); // => 3
