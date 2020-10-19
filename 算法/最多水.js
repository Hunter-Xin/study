//  [1,8,6,2,5,4,8,3,7]
function maxWater(arr) {
    let max = 0
    let [l, r] = [0, arr.length - 1]
    while (l < r) {
        let x = r - l
        console.log(x);
        let y = arr[l] > arr[r] ? arr[r--] : arr[l++]
        console.log(y);
        let s = x * y
        console.log(s);
        if (s > max) {
            max = s
        }
    }
    return max
}
let bb = maxWater([1,8,6,2,5,4,8,3,7])
console.log(bb);