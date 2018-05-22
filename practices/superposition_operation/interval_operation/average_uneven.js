'use strict';

function average_uneven(collection) {

  var result = 0;

  result = (collection.filter(value => value % 2 != 0).reduce((total,value) => total + value)) / (collection.length / 2);

  return result;
}

module.exports = average_uneven;
