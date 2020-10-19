
    // typeof:
    // ———主要判断基本数据类型 
    // (js在底层存储的时候，会在变量的低1-3位ji的机器码存储
    //     000 对象
    //     010 浮点数
    //     100 字符串
    //     110 布尔值
    //     1 整数 
    //     null的机器码都为0 所以被判定为对象
    //     )
    // 特例：
    console.log(typeof null) //object
    

    // instanceof:
    // ———主要判断某个实例是否属于某种类型
    // 也可以判断是否是父类或者原型上的实例
    let person = function () {
    }
    let nicole = new person()
    nicole instanceof person // true

    // object.prototype.toString.call():
    // 可以判断任意类型
    console.log(Object.prototype.toString.call(null))



