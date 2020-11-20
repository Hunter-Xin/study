var arr = [1, [2, 32, 3], [44, 2, [33, 34]]];

// function bp(arr) {
//   let list = [];
//   arr.forEach((item) => {
//     item instanceof Array ? (list = list.concat(bp(item))) : list.push(item);
//   });
//   return list;
// }

function a(arr) {
  let list = [];
  arr.forEach((item) => {
    item instanceof Array ? (list = list.concat(a(item))) : list.push(item);
  });
  return list;
}

let b = a(arr);
console.log(b);
