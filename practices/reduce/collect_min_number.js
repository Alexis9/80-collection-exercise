'use strict';

function collect_min_number(collection) {
  var result = 0;
  result = Math.min(...collection);
  return result;
}

module.exports = collect_min_number;

