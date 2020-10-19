//创建节点
function Node(top) {
    this.top = top
    this.left = undefined
    this.right = undefined
}
//根据传过来的一维数组建树
function Tree(arr) {
    let arrTree = []
    let root = new Node(arr.shift())
    arrTrue.push(root)
}

let curNode
while(arr.length!==0) {
    curNode = arrTree.shift()
    let leftVal = arr.shift()
    let rightVal = arr.shift()
    if(leftVal!==null){
        let left = new Node(leftVal)
        curNode.left = left
        arrTree.push(left)
    }
    if(rightVal!==null){
        let right = new Node(rightVal)
        curNode.right = right
        arrTree.push(right)
    }
    return root
}