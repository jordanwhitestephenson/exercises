// var arr = [5, 1, 4, 2, 3];
//
// var sorted = sort(arr);
// console.log(sorted); // [1, 2, 3, 4, 5]

function sortMyArray(array) {
  var leftIndex = 0
  var rightIndex = array.length - 1
  while(leftIndex < rightIndex) {
    var temp = array[leftIndex]
    array[leftIndex] = array[rightIndex]
    array[rightIndex] = temp
  }
  return array
}

sortMyArray([1,6,7,8])
s
