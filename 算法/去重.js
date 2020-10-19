function fn(arr) {
    let map = new Map()
    let list = []
    arr.forEach(item => {
        if(!map.has(item)) {
            map.set(item,false)
            console.log(item);
            list.push(item)
        }
    });
    return list
}

let arr1 = fn([1,2,3,3,3,2,1])
console.log(arr1);