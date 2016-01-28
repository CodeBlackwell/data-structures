var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);

  newQueue.maxIndex = 0;
  newQueue.minIndex = 0;
  newQueue.count    = 0;
  return newQueue;

};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this[this.maxIndex] = value;[]
  this.count++;
  this.maxIndex++;
};

queueMethods.dequeue = function(){
  var dequeued = this[this.minIndex];
  delete this[this.minIndex];
  if(this.count){
    this.count--;
  };
  this.minIndex++;
  return dequeued;
};

queueMethods.size = function(){
  return this.count;
}
