var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.count= 0;
  var linkedStorage = {};

  list.addToTail = function(value){
    list.tail = Node(value);
    console.log("This is list.tail after new node created", list.tail);
  };

  list.removeHead = function(){
    if(list.tail !== null){
      list.head = list.tail ;
      var beheadedVal = list.head;
      console.log("list.head in if state", list.head);
      delete list.head;
      return beheadedVal;
    }else{
      return null;
    }
  };

  list.contains = function(target){
    //iterate through the node
    //if current node is an exact match with the target, return true
    //assign the current node to the next node in the list
    //return false if there are no matches in target
    for(var key in list){
      if (list[key] === target){
        return true
      };
    }
  };

  return list;
};

var Node = function(value){
  var node = {};
  console.log(value);
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
