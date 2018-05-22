'use strict';

function rank_by_two_large_one_small(collection) {
  var result = [];
  var collection_sort = [];
  var thereItemsArr = [];

  collection_sort =  collection.sort((a, b) => a - b);

  for(var i=0 ; i< collection_sort.length ;i = i + 3){
    thereItemsArr.push(collection_sort.slice(i,i+3))
  }

  thereItemsArr.forEach((item,index) =>{
    if(item.length === 3){
      [item[0],item[1],item[2]] = [item[1],item[2],item[0]];
      result.push(item)
    }else {
      result.push(item)
    }
  })

  return result.reduce((a,b) => a.concat(b,[]));
}

module.exports = rank_by_two_large_one_small;
