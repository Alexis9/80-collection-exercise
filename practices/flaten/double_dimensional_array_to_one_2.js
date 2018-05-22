'use strict';
var collection = [[1, 2, 3], [5, 2, 1, 4], [2, 1]];
function double_to_one(collection) {
  var result = [];
  var char = [];
  char = collection.toString().split(",");
  for(var i=0 ; i<char.length ; i++){
    result.push(parseInt(char[i]))
  }
  result = result.filter(function (value, index, array) {
    return array.indexOf(value) === index;
  })

  return result;
}
console.log(double_to_one(collection))
module.exports = double_to_one;
