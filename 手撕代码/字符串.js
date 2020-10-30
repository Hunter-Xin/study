// 反转字符串
let str = "abcde";
let reStr = str.split("").reverse().join("");
console.log(reStr);
// 回文字符串，直接判断
function reverse1(a) {
  let p1 = a.split("").reverse().join("");
  return a === p1;
}
// 回文串，折半判断

function reverse2(a1) {
  for (let i = 0; i < a1.length / 2; i++) {
    if (a1[i] !== a1[a1.length - i - 1]) {
      return false;
    }
  }
  return true;
}

let b = "abccba";
let c = reverse2(b);
console.log(c);
