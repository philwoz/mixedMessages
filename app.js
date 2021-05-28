//get a random num between 0 and length of arr
const ranNum = (arr) => {
    return Math.floor(Math.random() * arr.length)

}
let a = [22, 6, 6, 6, 3 ,3]
console.log(ranNum(a));
