'use strict';

function even_to_letter(collection) {

  var result = [];
  result = collection.filter(value => value % 2 === 0).map(function (value) {
    return String.fromCharCode(value + 96)
  });

  return result;
}

module.exports = even_to_letter;
