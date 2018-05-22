'use strict';

function calculate_elements_sum(collection) {
  var result = 0;
  result = collection.reduce(function (total,value) {
    return total +  value;
  })
  return result;
}

module.exports = calculate_elements_sum;

