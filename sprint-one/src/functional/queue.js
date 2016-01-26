var Queue = function(){


  var someInstance = {},
      highestIndex = 0,
      lowestIndex  = 0,
      count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[highestIndex] = value;
    highestIndex++;
    count++;
  };
  
  

  someInstance.dequeue = function(value){
    var dequeued = storage[lowestIndex] 
    delete storage[lowestIndex];
    lowestIndex++
    if(count){
    count--;
    }
    return dequeued;
  };

  someInstance.size = function(){
    return count;
  };


  return someInstance;
};
