'use strict';

function compute_median(collection) {
  var result = 0;
  var collection_sort = [];
  var length = collection.length;

  collection_sort = collection.sort(function (a,b) {
    return a-b;
  })

  if(length % 2 === 0){
    return (collection_sort[length/2] + collection_sort[length/2 -1]) / 2;

  }else {
    return collection_sort[Math.floor(collection_sort.length / 2) ];
  }
  return result;
}


module.exports = compute_median;


