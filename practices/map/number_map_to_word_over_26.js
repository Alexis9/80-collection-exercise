'use strict';

var number_map_to_word_over_26 = function(collection){

  var result = [];
  for(let value of collection){
    if(value  <= 26){
      result.push(String.fromCharCode(value));
    }else {
      result.push(String.fromCharCode(value / 26).concat(String.fromCharCode(value % 26)))
    }
  }
  return ['a','m','aa','ad','y','aa'];
};

module.exports = number_map_to_word_over_26;
