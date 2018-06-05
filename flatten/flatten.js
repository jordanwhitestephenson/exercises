// ```js
// var flatten = require('./') // <- this is the file you make;
//
// var arr = [1, [2], [3, 4, [5]]];
//
// flatten(arr);
// // => [1, 2, 3, 4, 5];
//
// ```
var arr = [1, [2], [3, 4, [5]]];

function flatten(arr) {
  var flatMap = []
  arr.forEach(function(element){
    if(Array.isArray(element)) {
      flatMap = flatMap.concat(flatten(element))
    }
    else {
      flatMap.push(element)
    }
  })
  return flatMap
}
flatten(arr)
