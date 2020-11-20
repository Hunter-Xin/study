var arr1 = ["1.45.0", "1.5", "6", "3.3.3.3.3"];

arr1.sort((a, b) => {
  return a > b ? -1 : 1;
});
console.log(arr1);
