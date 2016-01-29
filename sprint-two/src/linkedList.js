var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value){
    //create new instance of node
    var newNode = Node(value);
    if(!list.head){
      //assign new node as head
      list.head = newNode;
    };

    if(list.tail){
      list.tail.next = newNode;
    }
    list.tail = newNode;

  };

  list.removeHead = function(){
    var beheadedVal = list.head
    //create a variable to ref current head
    var currentNode = list.head;
    //reassign head of list to next node
    list.head = currentNode.next;
    //set initial head of list to null
    currentNode = null;
    return beheadedVal.value;
  };

  list.contains = function(target){
    //create a variable to ref current head
    var currentNode = list.head;
    //continue iteration while node in list
    while(currentNode){
      //if current node is an exact match with target,
      //return true
      if(currentNode.value === target){
        return true;
      };
      //assign currentNode to ref next node on list
      currentNode = currentNode.next;
    }
    //return false if there are no matches in list
    return false;
  };
  return list;
};

var Node = function(value){
  var nodeInst = {};
  console.log(value);
  nodeInst.value = value;
  nodeInst.next = null;

  return nodeInst;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
