'use strict';

function compute_average(collection) {
  var result = 0;

  result = collection.reduce(function (total,value) {
    return total + value ;
  })
  result = result / collection.length;

  return result;
}

module.exports = compute_average;

