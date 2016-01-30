
/**
*
*/
// ###Graph Solution

// Instantiate a new graph
var Graph = function(){


  this.edge = false;
  this.nodes = {};
  this.key = 0;
  this.edgeBox = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){

  this.nodes[this.key] = node;

  console.log("value of this.nodes[this.value]", this.nodes[this.key]);
  console.log("what 'this' is equal to", this);
  this.key++;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  //iterate through all items in the .nodes property
  for(var key in this.nodes){
    if(this.nodes[key] === node){
      console.log('the value of this.nodes[key] within countains()', this.nodes[key]);
      return true;
    }
  } return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  //iterate through the nodes
  for(var key in this.nodes){
    //look for the target node to be removed
    if(node === this.nodes[key]){
      //delete the matching node
      delete this.nodes[key];
    }
  }


};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){

  if(fromNode === toNode){
    return false;
  }
  var nodeHolder = [];
   //push the fromNode into nodeHolder
  for(var key in this.nodes){
    if(fromNode === this.nodes[key]){
      nodeHolder.push(this.nodes[key])
    }
  }
  //push the toNode into nodeHolder
  
  for(var key in this.nodes){
    if(fromNode === this.nodes[key]){
      console.log('inside the fromNode loop', this.nodes[key])
      nodeHolder.push(this.nodes[key])
    }
  }

  //iterate through edgeBox

  //once found, see if both items contain pointers to each other.
  //if so, return true
  //else return false;
  //locate the source and 'to'Node

  return false;

};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  //check to avoid useless edges.
  if(fromNode === toNode){
    return;
  }
  var nodeHolder = [];
  //locate and push the fromNode into nodeHolder
  for(var key2 in this.nodes){

     if(toNode === this.nodes[key2]){

      nodeHolder.push(this.nodes[key2])
    }
  }
  //locate and push the toNode into NodeHolder

  for(var key in this.nodes){
    if(fromNode === this.nodes[key]){

      nodeHolder.push(this.nodes[key])
    }
  }
  //push the nodeHolder array which contains the fromNode and toNode
  //into the graph's edge container;
  console.log('value of nodeHolder(should have to and from nodes)', nodeHolder)
  console.log('value of edgebox before attempting push', this.edgeBox)
  this.edgeBox.push(nodeHolder);
  console.log('the value of this.edgebox after attempting push', this.edgeBox)
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
