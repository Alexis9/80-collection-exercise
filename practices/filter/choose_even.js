'use strict';

function choose_even(collection) {
  var result;
  for(var i=0 ; i<collection.length ; i++){

    result = collection.filter(function (x) {

      return x % 2 === 0
    })
  }
  return result
}

module.exports = choose_even;
