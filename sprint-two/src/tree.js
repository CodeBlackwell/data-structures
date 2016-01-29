var Tree = function(value){
  var newTree = {};

  newTree.value = value;
  newTree.children = [];  // fix me


  _.extend(newTree, treeMethods);
  console.log("This is the value of newTree within Class Tree", newTree);
  return newTree;
};


  // your code here
  //child nodes can only have one parent
  //child nodes can be parents to subnodes (subtrees) 


var treeMethods = {};
/**
*everytime a child is added to the tree
*the function will set the value of children[0] of current tree to the input value
*then return the modified children array.
*/
treeMethods.addChild = function(value){
  //iterate through the chil nodes until no other child nodes are found

  console.log("value of this.children within addChild", this.children);
  this.value = value;
  console.log("value of this.value within addChild", this.value);
  //while(this.children)
  //assign the value of the new child node to the input value;
  //assign the first index of newchild to input value;
  //return newChild;

  var newNode = this.value
  ;
  // this.children[0] = value;
  // console.log('the value of newTree.children', this.children);
  console.log("the value of newNode within addChild", newNode);

  return newNode;
};

/**
*returns true if the target value is within the tree.
*/
treeMethods.contains = function(target){
//iterate through the tree
//if index value is equal to target value
//return true.
//otherwise return false.
//

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
