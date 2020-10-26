// 题目一
const promise1 = new Promise((resolve, reject) => {
  console.log("promise1");
});
console.log(1, promise1);
// 分析：从上到下先遇到new Promise，执行构造函数中的代码，然后执行同步代码
// 输出 1 Promise{<pending>}

// ---------------------------------------------------------------

// 题目二
const promise2 = new Promise((resolve, reject) => {
  console.log(1);
  resolve("success");
  console.log(2);
});
promise2.then(() => {
  console.log(3);
});
console.log(4);
// 遇到resolve 将promise的状态改为了resolve
// 1 2 4 3

// ---------------------------------------------------------------

// 题目三
const promise3 = new Promise((resolve, reject) => {
  console.log(1);
  console.log(2);
});
promise3.then(() => {
  console.log(3);
});
console.log(4);
// 在promise中并没有改变状态，所以.then不会执行
// 1 2 4

// ---------------------------------------------------------------

// 题目四
const promise4 = new Promise((resolve, reject) => {
  console.log("ww");
  resolve("resolve");
});
const promise5 = promise4.then((res) => {
  console.log(res);
});
console.log(1, promise4);
console.log(2, promise5);
// ww 1 Promise{<resolve>: 'resolve'} 2 Promise{<pending>} resolve

// ---------------------------------------------------------------

// 题目五
const promise6 = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise6.then((res) => {
  console.log(res);
});
console.log(4);
// 1 2 4 timerStart timerEnd success

// ---------------------------------------------------------------

// 题目六
