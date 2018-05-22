'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var result = []
  result = collection_a.concat(collection_b).filter(v => !collection_a.includes(v) || !collection_b.includes(v));

  return result;
}

module.exports = choose_no_common_elements;
