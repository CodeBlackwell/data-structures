var Tree = function(value){
  var newTree = {};

  //child nodes can only have one parent
  //child nodes can be parents to subnodes (subtrees)
  newTree.value = value;
  newTree.parent;
  newTree.children = [];  // fix me


  _.extend(newTree, treeMethods);
  return newTree;
};


  // your code here



var treeMethods = {};
/**
*everytime a child is added to the tree
*the function will set the value of children[0] of current tree to the input value
*then return the modified children array.
*/
treeMethods.addChild = function(value){
  this.children.push(Tree(value));

  this.value = value;

  return this.children;
};


treeMethods.contains = function(target){
//iterate through the tree

  for(var i = 0; i < this.children.length ; i++){

    if(target === this.children[i].value){
      return true;
      }
    }

  return false;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
