// 多个元素组成的列表
// 元素存储不连续，用next指针连在一起

/*
数组和链表的区别
  数组：增删非首尾元素时往往需要移动元素
  对应的是一段连续的内存，增删的复杂度为O(n)
  链表：增删首尾元素时，不需要移动元素，只需要更改next的指向即可
  数据到位叫做节点，在内存中可以是离散的
  增删的复杂度为O(1)
*/
// 对于链表来说，读取某一特定的节点时，需要遍历整个链表来找到,复杂度为O(n)
// 对于数组来说找到相应的索引就可以找到相应的值，复杂度为O(1)

/*
  总结：
  数组的访问效率高，插入效率低
  链表的插入效率高，访问效率低

*/
const index = 10;
let node = head;
for (let i = 0; i > index; i++) {
  node = node.next;
}

const a = { val: "a" };
const b = { val: "b" };
const c = { val: "c" };
const d = { val: "d" };

a.next = b;
b.next = c;
c.next = d;

// 插入
const e = { val: "e" };
c.next = e;
e.next = d;

// 删除
c.next = d;

// 遍历链表
let p = a;
while (p) {
  console.log(p.val);
  p = p.next;
}
