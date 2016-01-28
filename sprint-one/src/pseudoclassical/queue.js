var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.minIndex = 0;
  this.maxIndex = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function(value){
  this[this.maxIndex] = value
  this.count++;
  this.maxIndex++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this[this.minIndex];
  delete this[this.minIndex];
  if(this.count){
    this.count--;
  }
  this.minIndex++
  return dequeued;
};

Queue.prototype.size = function() {
  return this.count;
}
