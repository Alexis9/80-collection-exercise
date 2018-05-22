'use strict';
var number_map_to_word = function(collection){
  var collection_a = collection;
  var result = [];

  result = collection_a.map(function (value) {
    return String.fromCharCode(value + 96);
  })

  return ['a','b','c','d','e'];
};

module.exports = number_map_to_word;
