var arr = [1, [2, 32, 3], [44, 2, [33, 34]]];

function bp(arr) {
  let list = [];
  arr.forEach((item) => {
    item instanceof Array ? (list = list.concat(bp(item))) : list.push(item);
  });
  return list;
}

let a = bp(arr);
console.log(a);
