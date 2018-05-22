function create_updated_collection(collection_a, object_b) {

  var collection_c = [];

  collection_a.forEach((value, index, array) => {
    if (index === array.indexOf(value)) {
      if (value.split("").includes("-")) {
        collection_c.push({key: value.split("")[0], count: Number(value.split("")[2])});
      } else {
        collection_c.push({key: value, count: collection_a.filter(value2 => value === value2).length});
      }
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
