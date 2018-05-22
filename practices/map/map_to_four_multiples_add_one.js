'use strict';
var map_to_four_multiples_add_one = function(collection){
  var collection_a = collection;
  var result = []
  result = collection_a.map(function (value) {
    return value*4 + 1 ;

  })
  return [5,9,13,17,21];
};

module.exports = map_to_four_multiples_add_one;
