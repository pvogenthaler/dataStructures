function Set() {
  this.storage = {};
  this.length = 0;
}

Set.prototype.add = function(value) {
  if (!this.storage[value]) {
    this.storage[value] = value;
  }
  this.length++;
}

Set.prototype.remove = function(value) {
  delete this.storage[value];
}

Set.prototype.contains = function(value) {
  return this.storage[value] ? true : false;
}

Set.prototype.union = function(set) {
  var newSet = new Set();
  for (var val in this.storage) {
    newSet.add(val);
  }
  for (var val in set.storage) {
    newSet.add(val);
  }
  return newSet;
}

Set.prototype.intersect = function(set) {
  var newSet = new Set();
  for (var val in this.storage) {
    if (set.storage[val]) {
      newSet.add(val);
    }
  }
  return newSet;
}

Set.prototype.isSubset = function(set) {
  for (var val in set.storage) {
    if (!this.storage[val]) {
      return false;
    }
  }
  return true;
}

Set.prototype.size = function() {
  return this.length;
}

var mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.remove(1);
console.log(mySet.contains(1));  // false

var secondSet = new Set();
secondSet.add(5);
console.log(mySet.union(secondSet));

var thirdSet = new Set();
thirdSet.add(2);
thirdSet.add(4);
thirdSet.add(5);
console.log(mySet.intersect(thirdSet));
console.log(mySet.isSubset(thirdSet));  // false
thirdSet.remove(5);
console.log(mySet.isSubset(thirdSet));  // true
