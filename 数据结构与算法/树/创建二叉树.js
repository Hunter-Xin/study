// 创建节点
function node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
// 通过传过来的数组创建树
function createTree(arr) {
  let treeArr = [];
  // 根节点
  let root = new node(arr.shift());
  treeArr.push(root);

  let p1;

  while (arr.length) {
    p1 = treeArr.shift();
    let leftVal = arr.shift();
    let rightVal = arr.shift();
    if (leftVal !== null) {
      let left = new node(leftVal);
      p1.left = left;
      treeArr.push(left);
    }
    if (rightVal !== null) {
      let right = new node(rightVal);
      p1.right = right;
      treeArr.push(right);
    }
  }
  return root;
}

// let a = createTree([1, 2, 3, 4, 5, 6, null, 4, null]);
// console.log(a);
