'use strict';

function grouping_count(collection) {
  //var collection = [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2];
  // p = {}
  // p['1'] = 1
  //p = {'1':4,'2':1,'3':1}
  //p '1':1
  //p[k]
  //h = {b:1}  h['b'] = 1  h.b = 1
  return collection.reduce((p,k) => ((p[k]++ || (p[k]=1)),p),{});
  //reduce

}
module.exports = grouping_count;
