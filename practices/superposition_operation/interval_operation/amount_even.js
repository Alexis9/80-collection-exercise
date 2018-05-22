'use strict';

function amount_even(collection) {

  var result = 0;

  result = collection.filter(value => value%2 === 0).reduce((total,value) => total + value)

  return result;
}

module.exports = amount_even;
