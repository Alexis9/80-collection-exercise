function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_c = [];

  collection_a.forEach((value, index, array) => {
    if(index === array.indexOf(value)){
      collection_c.push({key: value, count: collection_a.filter(value2 => value === value2).length})
    }
  })

  for(let c of  collection_c){
    for(let b of object_b.value){
      if(c.key === b){
        Object.assign(c,{key:c.key , count: c.count - parseInt(c.count / 3)})
      }
    }
  }

  return collection_c;
}

module.exports = create_updated_collection;
