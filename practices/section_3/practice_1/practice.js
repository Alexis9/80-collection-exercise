function create_updated_collection(collection_a, object_b) {
  for (let a of collection_a) {
    for (let b of object_b.value) {
      if (a.key === b) {
        Object.assign(a, {key: a.key, count: a.count - 1})
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
