var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 
 var newStack = {};
   _.extend(newStack, stackMethods);
   return newStack;
 
  newStack.count = 0;
   };
var stackMethods = {};
stackMethods.push = function(){
  this.count = Stack.count++;
};
stackMethods.pop = function(){
  if(Stack.count){
    this.count = Stack.count--;
  };
};
stackMethods.size = function(){
  this.count = Stack.count;
  console.log(this.count);
return this.count;
};
