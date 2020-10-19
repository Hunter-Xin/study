/*
    new的实现一共四个步骤
*/
function fn(){}
let a = new fn()
// 创建一个对象
let obj = new Object()
// 设置原型链
obj._proto_ = fn.prototype
// 让hd的this指向a
let result = fn.call(obj)
// 判断返回值的类型，如果是值类型，返回obj，如果会引用数据，就返回引用数据的对象