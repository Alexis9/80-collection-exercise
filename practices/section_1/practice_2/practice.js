function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for(let a of collection_a){
    for (let b of collection_b[0]){
      if(a === b){
        result.push(a);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
