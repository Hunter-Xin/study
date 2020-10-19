/*
  [[0,0],[4,0],[0,3]]
 */
function minP(arr) {
    let aa = 0
    let min = 999
    for(let i=0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++) {
            aa = Math.sqrt(
                Math.pow((arr[j][0]-arr[i][0]),2)
                +
                Math.pow((arr[j][1]-arr[i][1]),2)
            )
            aa = Math.round(aa)
        }
        if(aa<min) {
            min = aa
        }
    }
    return min
}

let b = minP([[0,0],[4,0],[0,3],[1,1]])
console.log(b);