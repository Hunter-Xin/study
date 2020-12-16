// 在 [1, 2, 3, 4, 5, 6, 7, 8, 9] 中找到 4，若存在则返回下标，不存在返回-1，要求算法复杂度O(logn)
function find(target, nums) {
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;
  let middleIndex;
  while (left <= right) {
    middleIndex = Math.floor((left + right) / 2);
    if (nums[middleIndex] === target) {
      return middleIndex;
    }
    if (nums[middleIndex] < target) {
      left = middleIndex + 1;
    }
    if (nums[middleIndex] > target) {
      right = middleIndex - 1;
    }
  }
  return -1;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = 4;
let c = find(b, a);
console.log(c);
