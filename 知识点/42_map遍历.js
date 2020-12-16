let arr = [1, 2, 3, 4, 5, 6, 7];
let a = arr.map((item, index, arr) => {
  console.log(item);
  console.log(index);
  console.log(arr);
  return item * 2;
});
// console.log(a);
