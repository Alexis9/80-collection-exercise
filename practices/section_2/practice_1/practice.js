function count_same_elements(collection) {
  var result = [];

  collection.forEach((value, index, array) => {
    if (index === array.indexOf(value)) {
      result.push({key: value, count: collection.filter(value2 => value2 === value).length})
    }
  })

  return result;
}

module.exports = count_same_elements;
