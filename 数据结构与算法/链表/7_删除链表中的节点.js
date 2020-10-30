// 创建节点
function listNode(val) {
  this.val = val;
  this.next = null;
}

// 创建一个链表
function createLink(arr) {
  let node = new listNode(arr[0]);
  let p1 = node;
  for (let i = 1; i < arr.length; i++) {
    let p2 = new listNode(arr[i]);
    p1.next = p2;
    p1 = p1.next;
  }
  return node;
}
