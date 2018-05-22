'use strict';

function hybrid_operation_to_uneven(collection) {

  var result = [];

  result = collection.filter(value => value % 2 != 0).map(item => item*3  + 2) ;

  return result;
}

module.exports = hybrid_operation_to_uneven;

