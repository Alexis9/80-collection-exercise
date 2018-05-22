'use strict';

function choose_multiples_of_three(collection) {
  var result;
  for(var i=0 ; i<collection.length ; i++){
    result = collection.filter(function (x) {
      return x % 3 === 0
    })
  }
  return result
}

module.exports = choose_multiples_of_three;
