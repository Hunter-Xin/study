// 首先Promise是一个构造函数
// executor是带有resolve和reject两个参数的函数
function Pro(executor) {
  // 1、默认初始化状态
  this.status = "pending";

  // 2、成功的值对应的是 resolve，默认为null
  this.value = null;

  // 3、失败的原因 对应的是reject，默认为null
  this.reason = null;

  // 在这里加上两个暂存的数组，分别存储resolve的异步函数和reject的异步函数

  this.arr1 = [];
  this.arr2 = [];

  this.resolve = (value) => {
    // 确保状态是pending才能更新状态
    if (this.status === "pending") {
      this.status = "fulfilled";
      this.value = value;
      // 在这里暂存所有的resolve暂存的回调
      this.arr1.forEach((fn) => fn(value));
      console.log(this.arr1, 2222);
    }
  };

  this.reject = (reason) => {
    // 确保是pending才能更新状态
    if (this.status === "pending") {
      this.status = "rejected";
      this.reason = reason;
      // 在这里暂存所有reject的暂存回调
      this.arr2.forEach((fn) => fn(reason));
    }
  };

  // 执行这个传进来的函数
  executor(this.resolve, this.reject);
}

// 实例方法有个then的方法来接收结果的
// 放在prototype更合适

Pro.prototype.then = function (onFulFilled, onRejected) {
  this.arr1.push(onFulFilled);
  console.log(this.arr1);
  this.arr2.push(onRejected);
  // 成功时传值的处理
  if (this.status === "fulfilled") {
    onFulFilled(this.value);
  }

  // 失败时的传值处理
  if (this.status === "rejected") {
    onRejected(this.reason);
  }
};

// 测试;
new Pro((resolve, rejected) => {
  console.log("2222222222222");
});

new Pro((resolve, reject) => {
  setTimeout(() => {
    resolve(1000);
  }, 1000);
}).then((res) => console.log(res));
