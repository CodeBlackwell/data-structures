var Stack = function(){
  var someInstance = {};
  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[counter] = value;
    counter++
    return storage;
  };

  someInstance.pop = function(){
    var popped = storage[counter - 1];
    delete storage[counter];
    if(counter){
      counter--;
    }
    return popped;
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
