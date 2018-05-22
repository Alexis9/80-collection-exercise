'use strict';

function toChar(i, char) {
  if (i <= 26) {
    char = String.fromCharCode(i + 96);
  } else {
    if (i % 26 === 0) {
      char = String.fromCharCode(parseInt((i - 1) / 26) + 96).concat(String.fromCharCode((i % 26) + 26 + 96));
    } else {
      char = String.fromCharCode(parseInt((i - 1) / 26) + 96).concat(String.fromCharCode((i % 26) + 96))
    }
  }
  return char;
}

function get_letter_interval_2(number_a, number_b) {
  var result =[];
  var  char = '';
    if(number_a < number_b){
      for(var i=number_a ;i <= number_b;i++){
        char = toChar(i, char);
        result.push(char)
      }
  }else {
    for(var i=number_a ;i >= number_b;i--){
      char = toChar(i, char);
      result.push(char)
    }
  }
  return result;
}

module.exports = get_letter_interval_2;
