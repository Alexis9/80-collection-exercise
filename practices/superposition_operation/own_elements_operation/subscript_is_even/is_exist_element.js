'use strict';
var is_exist_element = function(collection,element){
  var result ;
  result = collection.filter((value, index) => index % 2 === 0).includes(element);
  return result;
};
module.exports = is_exist_element;
