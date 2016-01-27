var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 
 var newStack = {};
  newStack.push   = stackMethods.push;
  newStack.pop    = stackMethods.pop;
  newStack.size   = stackMethods.size;
  newStack.count  = 0;

   _.extend(newStack, stackMethods);
   return newStack;
   };
   
var stackMethods = {};
stackMethods.push = function(value){
  this[this.count] = value
  this.count++
};

stackMethods.pop = function(){
  var popped = this[this.count - 1];
  if(this.count){
    this.count--;
  };
  return popped;
};

stackMethods.size = function(){
return this.count;
};
