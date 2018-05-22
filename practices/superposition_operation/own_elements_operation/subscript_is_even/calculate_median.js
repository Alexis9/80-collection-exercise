 'use strict';
var calculate_median = function(collection){
  var result;
  var evenThItems;
  evenThItems = collection.filter((value, index) => (index + 1) % 2 === 0 ).sort((a,b) => a - b);

  if(evenThItems.length % 2 !== 0){
    return evenThItems[Math.floor(evenThItems.length / 2)];
  }
  if(evenThItems.length % 2 === 0){
    return (evenThItems[evenThItems.length / 2] + evenThItems[(evenThItems.length / 2) - 1 ]) / 2;
  }

};
module.exports = calculate_median
