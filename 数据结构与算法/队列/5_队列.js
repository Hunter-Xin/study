// 先进先出
const queue = [];
queue.push(1); // [1]
queue.push(2); // [1,2]
const item1 = queue.shift(); // [2]
const item2 = queue.shift(); // []
