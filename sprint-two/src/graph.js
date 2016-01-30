
/**
*
*/
// ###Graph Solution

// Instantiate a new graph
var Graph = function(){


  this.edge;
  this.nodes = {};
  this.key = null;
  this.value = null;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){

  this.nodes[this.key] = node;

  console.log("value of this.nodes[this.value]", this.nodes[this.key]);
  console.log("what 'this' is equal to", this);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  //iterate through all items in the .nodes property
  for(var key in this.nodes){
    if(this.nodes[key] === node){
      return true;
    }
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  //iterate through the nodes
  //look for the target node to be removed
  //delete the matching node
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){

  //iterate through nodes to find fromNode and toNode
  //once found, see if both items contain pointers to each other.
  //if so, return true
  //else return false;
  return false;

};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  //locate the source and 'to'Node
  //assign each a pointer to the other
  // from Source --> Target and Target --> Source
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
//locate to the fromNode and toNode within the graph
//check to see if the two nodes have an Edge. if so,
//delete their respective pointers(edges)
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(callback){
    //iterate through all objects in nodes
    for(var key in this.nodes){
      //on each object use the callback function
      callback(this.nodes[key], key, this.nodes);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
