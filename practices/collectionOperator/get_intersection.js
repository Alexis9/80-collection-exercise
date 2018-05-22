'use strict';

function get_intersection(collection_a, collection_b) {
  var same = []
  for(var j=0 ; j<collection_b.length ;j++){
    for(var i=0 ; i<collection_a.length ; i++){
      var gap = collection_b[j]-collection_a[i];
      if(gap === 0){
        same.push(collection_b[j])
      }
    }
  }
  return same;
}

module.exports = get_intersection;
