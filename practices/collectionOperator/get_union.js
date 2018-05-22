'use strict';
  function get_union(collection_a, collection_b) {
    var result = []
    var union = []
    union = collection_a.concat(collection_b)

    for(var i=0 ;i<union.length; i++){
      if(result.indexOf(union[i]) === -1){
        result.push(union[i])
      }
    }
    return result
}
module.exports = get_union;

