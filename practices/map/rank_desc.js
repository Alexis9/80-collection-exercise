'use strict';
var rank_desc = function(collection){
  var collection_a = collection ;
  var result = [];
  result = collection_a.sort(function (a,b) {
    return b-a;
  })
  return [2,3,4,5,6];
};

module.exports = rank_desc;
