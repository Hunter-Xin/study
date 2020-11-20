// function fn(arr) {
//   let map = new Map();
//   let list = [];
//   arr.forEach((item) => {
//     if (!map.has(item)) {
//       map.set(item, false);
//       list.push(item);
//     }
//   });
//   return list;
// }
function fn(arr) {
  let result = [];
  let map = new Map();
  arr.forEach((item) => {
    if (!map.has(item)) {
      map.set(item);
      result.push(item);
    }
  });

  return result;
}

let arr1 = fn([1, 2, 3, 3, 3, 2, 1]);
console.log(arr1);
