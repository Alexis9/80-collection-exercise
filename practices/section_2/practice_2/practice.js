
function count_same_elements(collection) {
  var  result = [];
  collection.forEach((value, index, array) => {
    if(index === array.indexOf(value)){
      if(value.length === 1) {
        result.push({key: value, count: collection.filter(element => element === value).length});
      }else {
        result.push({key:value.charAt(0),count:Number(value.charAt(2))})
      }
    }
  })
  return result;
}


module.exports = count_same_elements;
