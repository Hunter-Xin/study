// 任何函数都可以作为构造函数，但是不能将任意函数都叫做构造函数
// 只有当一个构造函数通过new关键字调用的时候才可以成为构造函数
var Parent = function () {};
Parent.prototype.name = "小明";
// 定义一个函数，只是一个普通函数
var p1 = new Parent();
/**
 * 此时Parent就不是一个普通函数了，为构造函数
 * p1为实例
 */

