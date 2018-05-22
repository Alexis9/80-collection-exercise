function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for (let a of collection_a) {
    for (let b of object_b.value) {
      if (a.key === b) {
        Object.assign(a, {key: a.key, count:a.count - parseInt(a.count  / 3)});
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
