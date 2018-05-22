'use strict';
var even_asc_odd_desc = function (collection) {
  var evenSet = [];
  var oddSet = [];
  var result = [];

  evenSet = collection.filter(value => value % 2 === 0).sort((a, b) => a - b);
  oddSet = collection.filter(value => value % 2 != 0).sort((a, b) => b - a);

  result = evenSet.concat(oddSet);

  return result;

};
module.exports = even_asc_odd_desc;
