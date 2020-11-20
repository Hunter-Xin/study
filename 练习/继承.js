function Parent() {
  this.color = "red";
  this.aa = function () {
    console.log(this.color);
  };
}
function Son() {
  Parent.call(this);
}
function Son1() {}
Son1.prototype = new Parent();
// Son1.prototype.constructor = Son1;
let son = new Son();
console.log(son.color);
let son1 = new Son1();
console.log(son1.color);
