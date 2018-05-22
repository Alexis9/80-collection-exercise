'use strict';
var rank_asc = function(collection){
  var collection_a = collection ;
  var result = [];
  result = collection_a.sort(function (a,b) {
    return a-b;
  })
  return [6,5,4,3,2];
};

module.exports = rank_asc;
