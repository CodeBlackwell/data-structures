var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.hashStorage = {};
};

HashTable.prototype.insert = function(){
  var argsArray = [].slice.call(arguments);
  var argsLength = argsArray.length;
  console.log(argsLength);
  for (var i = 0; i < argsLength; i++){
  var currentHashedVal = valueHasher(argsArray[i], this._limit);
  this.hashStorage.currentHashedVal= argsArray[i];
  console.log("index after current val assignment to storage", this.hashStorage.currentHashedVal[i])
  };
};

HashTable.prototype.retrieve = function(index){
  var currentHashedVal = valueHasher(index, this._limit);

};

HashTable.prototype.remove = function(index){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
