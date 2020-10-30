const a = "{(())}((";

// 根据栈的特性，后进先出
function isValid(s) {
  if (s.length % 2 === 1) {
    return false;
  }
  // 以数组的形式模仿栈
  const stack = [];
  // 循环数据
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    // 先判断进栈的括号，放到数组里
    if (item === "(" || item === "{" || item === "[") {
      stack.push(item);
    } else {
      const last = stack[stack.length - 1];
      if (
        (last === "(" && item === ")") ||
        (last === "{" && item === "}") ||
        (last === "[" && item === "]")
      ) {
        stack.pop(); // 相等了就弹出去
      } else {
        return false;
      }
    }
  }
  // 到最后还没结束 就return数组的长度 长度为0 就是true 不为0就是flase
  return stack.length === 0;
}

const b = isValid(a);
console.log(b);
