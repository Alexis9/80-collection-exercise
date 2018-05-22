'use strict';

function get_letter_interval(number_a, number_b) {
  var num = 0
  var result = []
  var collection = "";
  if(number_a < number_b){
    for( ; number_a <= number_b ; number_a++){
      num = number_a + 96;
      collection = String.fromCharCode(num)
      result.push(collection)
    }
  }

  else if(number_a > number_b){
    for( ; number_a >= number_b ; number_a--){
      num = number_a + 96;
      collection = String.fromCharCode(num)
      result.push(collection)
    }
  }

  else{
    num = number_a + 96;
    collection = String.fromCharCode(num)
    result.push(collection)
  }
  return result;
}

module.exports = get_letter_interval;

