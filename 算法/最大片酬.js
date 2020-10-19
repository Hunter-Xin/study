/*
    题目：几部影片同时开拍，现有6位艺人，为A,B,C,D,E,F,
    片酬分别为10万，5万，15万，20万，40万，30万
    求出哪个影片话费更多片酬
    输入：[['A','B','C'],['B','E']]
    输出：45

*/
function maxPrice(arr) {
    let obj = {'A':10,'B':5,'C':15,'D':20,'E':40,'F':30}
    let max = 0
    arr.forEach((item) => {
        let sum = 0
        item.forEach((val) => {
            sum += obj[val]
        })
        if(sum > max) {
            max = sum
        }
    })
    return max
}

let ary = maxPrice([['A','B','C'],['B','E']])
console.log(ary);

