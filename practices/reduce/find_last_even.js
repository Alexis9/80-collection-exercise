'use strict';

function find_last_even(collection) {
  var result = 0;

  // result = collection.reduce(function (total,value) {
  //   if(value % 2 ===0){
  //     return value;
  //   }
  // })
  for(var i=collection.length ; i>0 ; i--){
    if(collection[i] % 2 ===0){
      result = collection[i];
      break;
    }
  }


  return result;
}

module.exports = find_last_even;
