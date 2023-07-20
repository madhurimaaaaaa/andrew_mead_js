let num = 103.876
 console.log(num.toFixed(1))

 //round method
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum)


//challenge
let getGuess = function (guessNum) {
let min1 = 1
let max2 =  5
let randomNum = Math.floor(Math.random() * (max2 - min1 + 1)) + min1
return guessNum === randomNum

}
console.log(getGuess(2))
