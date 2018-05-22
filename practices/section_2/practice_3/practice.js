// function getInitialSet(collection, initialSet) {
//   collection.forEach(((value, index, array) => {
//     if (index === array.indexOf(value)) {
//       if (value.length === 1) {
//         initialSet.push({name: value, summary: collection.filter(item => item === value).length})
//       }
//       if (value.length === 3 || value.length === 4) {
//         initialSet.push({name: value.charAt(0), summary: Number(value.charAt(2))})
//       }
//       if (value.length === 5) {
//         initialSet.push({name: value.charAt(0), summary: Number(value.substring(2, 4))})
//       }
//     }
//   }));
//   return initialSet;
// }
//
// function count_same_elements(collection) {
//   var result =[];
//   var initialSet=[];
//   var hSet = [];
//   var tSet = [];
//   initialSet = getInitialSet(collection, initialSet);
//
//   for(let item of initialSet){
//
//     if(item.name != "h" && item.name != "t" ) {
//       result.push(item);
//     }else {
//       if(item.name === "h" ){
//         hSet.push(item.summary);
//         result.push({name: "h", summary: hSet.reduce((total,value) => total + value)})
//       }
//       if(item.name === "t"){
//         tSet.push(item.summary);
//         result.push({name: "h", summary: tSet.reduce((total,value) => total + value)})
//       }
//     }
//   }
//
//   console.log(result)
//   return initialSet;
// }
// var collection = [
//   "a", "a", "a",
//   "e", "e", "e", "e", "e", "e", "e",
//   "h", "h", "h", "h", "h", "h", "h[3]", "h", "h",
//   "t", "t-2", "t", "t", "t", "t", "t", "t", "t[10]",
//   "f", "f", "f", "f", "f", "f", "f", "f", "f",
//   "c:8",
//   "g", "g", "g", "g", "g", "g", "g",
//   "b", "b", "b", "b", "b", "b",
//   "d-5"
// ];
// count_same_elements(collection);
// module.exports = count_same_elements;
//
function count_same_elements(collection) {
  var result = new Array();

  for(var index in collection) {
    result = isExist(collection[index], result);
  }
  return result;
}

function isExist(element,result) {
  var key_and_count = getKeyAndCount(element);

  for(var index in  result) {
    if((result[index])["name"] == key_and_count[0]){
      (result[index])["summary"] += parseInt(key_and_count[1]);

      return result;
    }
  }
  result.push({name: key_and_count[0], summary: parseInt(key_and_count[1])});

  return result;
}

function getKeyAndCount(element) {
  var key_and_count = [element,1];

  if(element.split("-").length > 1){
    key_and_count[0] = element.split("-")[0];
    key_and_count[1] = element.split("-")[1];
  }else if(element.split(":").length > 1){
    key_and_count[0] = element.split(":")[0];
    key_and_count[1] = element.split(":")[1];
  }else if(element.split("[").length > 1){
    key_and_count[0] = element.split("[")[0];
    key_and_count[1] = element.split("[")[1].split("]")[0];
  }

  return key_and_count;
}
module.exports = count_same_elements;
