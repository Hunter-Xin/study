// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。请找出其中最小的元素。你可以假设数组中不存在重复元素。
function find(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  if (arr.length === 0) return null;
  if (arr[right] > arr[left]) return arr[0];
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid + 1]) {
      return arr[mid + 1];
    }
    if (arr[mid] < arr[mid - 1]) {
      return arr[mid];
    }
    if (arr[mid] > arr[0]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return null;
}
let a = [4, 5, 6, 7, 8, 9, 1, 2, 3];
let c = find(a);
console.log(c);
