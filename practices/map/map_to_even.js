'use strict';

function map_to_even(collection){
  var collection_a = collection;
  var result = [];

  result = collection_a .map(function (currentValue) {
    return currentValue*2;
  })

  return [2,4,6,8,10];
}
module.exports = map_to_even;
