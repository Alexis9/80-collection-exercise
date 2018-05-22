function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  for(let a of collection_a){
    for(let  b of object_b.value){
      if(a === b){
        result.push(a);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
