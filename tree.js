function Tree(value) {
  this.root = this;
  this.parent = null;
  this.value = value;
  this.children = [];
}

Tree.prototype.addChild = function(value) {
  var newNode = new Tree(value);
  newNode.parent = this;
  newNode.root = this.root;
  this.children.push(newNode);
  newNode.parent = this;
}

Tree.prototype.removeChild= function(value) {
  this.children.splice(this.children.indexOf(value), 1);
}


var myTree = new Tree(0);
myTree.addChild(1);
myTree.addChild(2);
console.log(myTree);
myTree.removeChild(2);
myTree.children[0].addChild(3);
console.log(myTree);
