function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function createTree(arr) {
  let tempArr = [];
  let node = new Node(arr.shift());
  tempArr.push(node);
  let p1 = node;
  while (arr.length !== 0) {
    p1 = tempArr.shift();
    let leftVal = arr.shift();
    let rightVal = arr.shift();
    if (leftVal) {
      let left = new Node(leftVal);
      p1.left = left;
      tempArr.push(left);
    }
    if (rightVal) {
      let right = new Node(rightVal);
      p1.right = right;
      tempArr.push(right);
    }
  }
  return node;
}

let a = createTree([1, 2, 3, 4, 5, 6, null, 4, null]);
console.log(a);
