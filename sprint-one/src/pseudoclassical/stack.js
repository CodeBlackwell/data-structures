var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.count = 0;
};

Stack.prototype.push = function(value){
  this[this.count] = value;
  this.count++
};

Stack.prototype.pop = function(){
  var poppedValue = this[this.count - 1];
  delete this[this.count];
  if(this.count){
    this.count--;
  }
  return poppedValue;
};

Stack.prototype.size = function(){
  return this.count;
};
