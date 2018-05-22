'use strict';

function hybrid_operation_to_uneven(collection) {
  var result =[];

  result = collection.filter(value => value % 2 != 0).map(item => item*3  + 5).reduce((total,value) => total + value)

  return result;
}

module.exports = hybrid_operation_to_uneven;

