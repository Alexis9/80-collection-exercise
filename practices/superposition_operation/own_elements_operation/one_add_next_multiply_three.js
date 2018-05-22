'use strict';

function one_add_next_multiply_three(collection) {
  var result = [];

  result = collection.map((value, index, array) => {
    return (value + array[index + 1]) * 3;
  })

  return [12, 24, 36, 48, 60, 72, 84, 96, 108, 120];
}

module.exports = one_add_next_multiply_three;
