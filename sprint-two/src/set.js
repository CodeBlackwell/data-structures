var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = [];
  set.indexx = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this.storage[this.indexx] = item;
	this.indexx++;
};

setPrototype.contains = function(item){
	for( var i = 0 ; i < this.storage.length ; i++ ){
		if( this.storage[i] === item ){
			return true;
		}
	}
		return false;
};

setPrototype.remove = function(item){
	for( var i = 0 ; i < this.storage.length ; i++ ){
		if( this.storage[i] === item ){
			delete this.storage[i];
		}
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
