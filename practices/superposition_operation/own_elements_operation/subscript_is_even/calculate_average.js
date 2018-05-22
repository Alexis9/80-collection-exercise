'use strict';
var calculate_average = function(collection){
  var result = 0.00;
  var evenSet = [];

  evenSet = collection.filter((value, index) => (index + 1) % 2 === 0);
  result = evenSet.reduce((total,value) => total + value) / evenSet.length;

  return result;
};
module.exports = calculate_average;
