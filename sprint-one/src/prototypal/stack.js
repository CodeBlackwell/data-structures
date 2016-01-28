var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.count = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this[this.count] = value;
  this.count++;
};

stackMethods.pop = function(){
  var poppedValue = this[this.count - 1];
  delete this[this.count];
  if(this.count){
    this.count--;
  }
  return poppedValue;
};

stackMethods.size = function(){
  return this.count;
};
