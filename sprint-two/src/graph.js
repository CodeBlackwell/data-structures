
/**
*
*/
// ###Graph Solution

// Instantiate a new graph
var Graph = function(){


  this.nodes = {};
  this.key = 0;
  this.edgeBox = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){

  this.nodes[this.key] = node;

  this.key++;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  //iterate through all items in the .nodes property
  for(var key in this.nodes){
    if(this.nodes[key] === node){
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
    if(toNode === this.nodes[key]){
      nodeHolder.push(this.nodes[key])
    }
  }

  //iterate through edgeBox
  for(var i = 0 ; i < this.edgeBox.length ; i++){

      //if the 2 arrays match in [x, y] or [y, x] then....
      if( (this.edgeBox[i][i] === nodeHolder[i] && this.edgeBox[i][i+1] === nodeHolder[i + 1]) ||
      (this.edgeBox[i][i+1] === nodeHolder[i] && this.edgeBox[i][i] === nodeHolder[i+1]) ) {
        return true;
      }
  }

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
  this.edgeBox.push(nodeHolder);
  //assign each a pointer to the other
  // from Source --> Target and Target --> Source
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  edgeToCompare = [fromNode, toNode];
  console.log("the value of edgeToCompare(fromNode, toNode)", edgeToCompare);
  console.log("the value of edgeBox within removeEdge", this.edgeBox);
  if(this.hasEdge(fromNode, toNode)){
    for(i = 0 ; i < this.edgeBox.length ; i++){
    console.log('in if statement', this.edgeBox[i][0]);
      if(this.edgeBox[i][0] === edgeToCompare[0]){
          if(this.edgeBox[i][1] === edgeToCompare[1]){
            this.edgeBox.splice(i, 1);
          }
        } else if(this.edgeBox[i][1] === edgeToCompare[0]){
            if(this.edgeBox[i][0] === edgeToCompare[0]){
             this.edgeBox.splice(i, 1);
          }
        }
      }
    }
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
