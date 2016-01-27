var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var newStack = {};

  _.extend(newStack, Stack);


  return newStack;
};

Stack.stackMethods = {};
var count = 0;

Stack.stackMethods.push = function(){

};

Stack.stackMethods.pop = function(){

};

Stack.stackMethods.size = function(){
return count;
};

