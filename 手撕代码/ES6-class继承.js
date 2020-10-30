class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Son extends People {
  constructor(name, age) {
    super(name, age);
  }
}

const XM = new Son("小明", 18);
console.log(XM.name, XM.age);
