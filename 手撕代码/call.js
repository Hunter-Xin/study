Function.prototype.call = function (context, ...args) {
  context = context || window; // 判断上下文是否传入，默认window
  const fn = this; // 保存this

  context.fn = fn; // 最重要的一步：改变this指向，通过挂载到context上，实现this的转移
  const res = context.fn(...args); // 立即执行

  delete context.fn;

  return res; // 返回结果
};

Function.prototype.apply = function (context, ...args) {
  context = context || window; // 判断上下文是否传入，默认window
  const fn = this; // 保存this

  context.fn = fn; // 最重要的一步：改变this指向，通过挂载到context上，实现this的转移
  const res = context.fn(...args[0]); // 立即执行

  delete context.fn;

  return res; // 返回结果
};
Function.prototype.bind = function (context, ...args) {
  context = context || window; // 判断上下文是否传入，默认window
  const fn = this; // 保存this

  context.fn = fn; // 最重要的一步：改变this指向，通过挂载到context上，实现this的转移

  // 返回闭包
  return function () {
    const res = context.fn(...args); // 立即执行

    delete context.fn;

    return res; // 返回结果
  };
};

let a = {
  name: "I am a",
  sayName: function (...out) {
    console.log(this.name + (out ? out : ""));
  },
};
let b = {
  name: "I am b",
};
a.sayName.call(b, "我是额外参数", "参数2");
