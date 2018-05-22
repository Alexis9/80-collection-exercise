'use strict';

function double_to_one(collection) {
  // var result = [] ;
  // var char = [];
  // char = collection.toString().split(",");
  // for(var i=0 ; i<char.length ; i++){
  //   result.push(parseInt(char[i]))
  // }
  // return Array.prototype.concat.apply([],collection);
  return [].concat(...collection);
}
module.exports = double_to_one;
