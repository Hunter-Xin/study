Function.prototype.call = function (context, ...args) {
  context = context || window;
  const fn = this;
  context.fn = fn;
  const res = context.fn(...args);
  delete context.fn;
  return res;
};
Function.prototype.apply = function (context, ...args) {
  context = context || window;
  const fn = this;
  context.fn = fn;
  const res = context.fn(...args[0]);
  delete context.fn;
  return res;
};
