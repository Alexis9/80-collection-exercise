'use strict';
var single_element = function (collection) {
  var result = [];

  collection.filter((value, index) => (index + 1) % 2 === 0).forEach((value, index, array) => {
    if (array.indexOf(value) === index) {
      result.push(value);
    } else {
      result.pop(value);
    }
  })
  return result.sort((a, b) => a - b);
};
module.exports = single_element;
