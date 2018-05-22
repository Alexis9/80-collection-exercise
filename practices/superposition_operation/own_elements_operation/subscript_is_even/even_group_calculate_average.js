'use strict';

function averaging(array) {
  return (array.reduce((total, value) => total + value)) / array.length;
}

function judgeDigit(even_evenThValues, digit, oneDigitItems, twoDigitItems, thereDigitItems) {
  for (let item of even_evenThValues) {
    digit = item.toString().length;
    if (digit === 1) {
      oneDigitItems.push(item);
    }
    if (digit === 2) {
      twoDigitItems.push(item)
    }
    if (digit === 3) {
      thereDigitItems.push(item)
    }
  }
}

var even_group_calculate_average = function (collection) {
  let result = [];
  let even_evenThValues = [];
  let oneDigitItems = [];
  let twoDigitItems = [];
  let thereDigitItems = [];
  let digit = 0;

  even_evenThValues = collection.filter((value, index) => (index + 1) % 2 === 0).filter(value => value % 2 === 0);

  if (even_evenThValues.length === 0) {
    result.push(0);
  } else {
    judgeDigit(even_evenThValues, digit, oneDigitItems, twoDigitItems, thereDigitItems);

    if (oneDigitItems.length === 0 && twoDigitItems.length === 0 && thereDigitItems.length != 0) {
      result.push(averaging(thereDigitItems));
    }
    if (oneDigitItems.length != 0 && twoDigitItems.length != 0 && thereDigitItems.length != 0) {
      result.push(averaging(oneDigitItems));
      result.push(averaging(twoDigitItems));
      result.push(averaging(thereDigitItems));
    }
  }
  return result;
};


module.exports = even_group_calculate_average;

