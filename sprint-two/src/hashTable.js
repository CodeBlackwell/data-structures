var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.hashStorage = {};
};

HashTable.prototype.insert = function(){
  var argsLength = [].length.apply(arguments);
  for (var i = 0; i < argsLength; i++){
  var currentHashedVal = valueHasher(arguments[i], this._limit);
  this.hashStorage.currentHashedVal= arguments[i];
  console.log("index after current val assignment to storage", index)
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
