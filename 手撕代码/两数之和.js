function add(arr, num) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let key = num - arr[i];
    if (map.has(key)) {
      return [map.get(key), i];
    }
    map.set(arr[i], i);
  }
}
let a = [2, 7, 11, 15];
let b = 9;
let c = add(a, b);
console.log(c);
