'use strict';

function average_to_letter(collection) {
  var result = [];

  result = String.fromCharCode(Math.ceil((collection.reduce((total,value) => total + value)) / collection.length ) + 96)

  return result;
}

module.exports = average_to_letter;

