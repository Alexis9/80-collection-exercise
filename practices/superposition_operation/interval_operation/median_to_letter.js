'use strict';

function median_to_letter(collection) {
  var result = " ";
  var median = 0;
  var collection_sort = [];

  collection_sort = collection.sort((a,b) => a-b);

  if(collection.length % 2 === 0){
    median = Math.ceil((collection_sort[(collection.length / 2) -1] + collection_sort[collection.length / 2]) / 2);
  }else {
    median = Math.ceil(collection_sort[Math.floor(collection.length / 2)]);
  }

  if(median <= 26){
    result = String.fromCharCode(median)
  }else {
    result = String.fromCharCode((median / 26) + 96).concat(String.fromCharCode((median % 26) + 96))
  }

  return result;
}

module.exports = median_to_letter;
