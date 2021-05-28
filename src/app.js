const data = require('./quotes')


//get a random num between 0 and length of arr
const ranNum = (arr) => {
    return Math.floor(Math.random() * arr.length)

}

const getRanQuote = (arr) => {
    return arr[ranNum(arr)]
}
let a = [1,2]
let arr = data.lyrics;
console.log(getRanQuote(arr))

console.log(ranNum(arr))