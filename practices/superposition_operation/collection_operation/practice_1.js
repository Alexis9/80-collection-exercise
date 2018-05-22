'use strict';

function hybrid_operation(collection) {
  var result = 0;

  result = collection.map(value => value*3 + 2).reduce((total,value) => total + value)
  return result;
}

module.exports = hybrid_operation;

