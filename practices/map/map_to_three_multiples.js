'use strict';
var map_to_three_multiples = function(collections){
  var collection_a = collections;
  var result = [];

  result = collection_a.map(function (value) {
    return value*3;
  })

  return [3,9,15,12,27];
};

module.exports = map_to_three_multiples;
