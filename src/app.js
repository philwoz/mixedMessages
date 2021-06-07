const data = require('./quotes')


//get a random num between 0 and length of arr
const ranNum = (arr) => {
    return Math.floor(Math.random() * arr.length);

}

const getRanQuote = (arr) => {
    return arr[ranNum(arr)];
}

const generateQuote = (arr) => {
    console.log("*****OASIS QUOTE Machine *******")
    console.log(`>>>> Noel Quote : ${getRanQuote(arr.noel)}`)
    console.log("*****OASIS QUOTE Machine")
    console.log(`>>>>Liam   Quote : ${getRanQuote(arr.liam)}`)
    console.log("*****OASIS QUOTE Machine")
    console.log(`>>>>Lyric : ${getRanQuote(arr.lyrics)}`)
}
 
generateQuote(data)

