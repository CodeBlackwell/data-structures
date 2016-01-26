var Queue = function(){

  var objLength = function(obj){
    var length = 0;
    for(var key in obj){
      length++;
    }
    return length;
  }

  var someInstance = {},
      highestIndex = 0,
      lowestIndex  = 0,
      count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance[count] = value;
    //when an element is adde
    count++;
  };
  
  

  someInstance.dequeue = function(value){
    someInstance[count] = value;
    if(count){
    count--;
    }
  };

  someInstance.size = function(){
    return count;
  };


  return someInstance;
};
