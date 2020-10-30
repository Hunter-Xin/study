function sum(arr, tag) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let key = tag - arr[i];
    // 如果找到差值 就返回
    if (map.has(key)) {
      return [map.get(key), i];
    } else {
      map.set(arr[i], i);
    }
  }
}

let arr1 = [2, 5, 7, 8];
let a = 9;
let b = sum(arr1, a);
console.log(b);
