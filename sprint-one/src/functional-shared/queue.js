var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //Declare instance of Queue
var newQueue = {};
//extend the instance with methods,
_.extend(newQueue, queueMethods);
//Create pointers for the instance to the methods in queueMethods.
newQueue.enqueue = queueMethods.enqueue;
newQueue.dequeue = queueMethods.dequeue;
newQueue.size    = queueMethods.size;
//Create counts to track the size of, and max and min locations within the Queue.
newQueue.maxIndex = 0;
newQueue.minIndex = 0;
newQueue.count    = 0;
return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
this[this.maxIndex] = value;
console.log("this.maxIndex", this.maxIndex);
this.count++
this.maxIndex++;
};

queueMethods.dequeue = function(){
  var dequeued = this[this.minIndex]
  delete this[this.minIndex];
  if (this.count){
    this.count--;
  }
  this.minIndex++;
  return dequeued;
};

queueMethods.size = function(){
return this.count;
}
