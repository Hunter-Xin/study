var arr1 = [1, 2, 4, 6, 7, 9];
var a = 4;
function find(arr, num) {
  let middleIndex = Math.floor(arr.length / 2);
  let left = arr.splice(0, middleIndex);
  let right = arr.splice(middleIndex, arr.length);
}
