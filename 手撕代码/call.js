Function.prototype.call = function (context) {
  console.log(1);
  //重定义this
  const DoLi = context || window;
  //模拟档期那的对象的this指向
  DoLi.func = this;
  //获取参数
  const args = Array.from(arguments).slice(1);
  //绑定参数
  const res = arguments.length > 1 ? DoLi.func(...args) : DoLi.func();
  //清除定义的this
  delete DoLi.func;
  //返回结果
  return res;
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
