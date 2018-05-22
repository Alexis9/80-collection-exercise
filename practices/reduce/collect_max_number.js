'use strict';

function collect_max_number(collection) {
  var result = 0;

  result = Math.max(...collection);
  return result;
}

module.exports = collect_max_number;
