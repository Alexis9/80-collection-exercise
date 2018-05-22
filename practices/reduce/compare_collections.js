'use strict';

function compare_collections(collection_a, collection_b) {
  var result ;
  var length = collection_a.length;
  var collection;

  if( length === collection_b.length){
    return true;
  }else{
    return false;
  }

  for(var i=0 ; i<length ; i++){
    if(collection_a[i] != collection_b[i]){
      return false;
    }else {
      return true;
    }
  }
}

module.exports = compare_collections;


