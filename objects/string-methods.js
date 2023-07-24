let name = '  Madhurima K'
//length property
console.log(name.length)
//convert to uppercase
console.log(name.toUpperCase())

// c to lower case
console.log(name.toLowerCase())
// includes
let password = 'abcd1234'
console.log(password.includes('password'))

//trim
console.log(name.trim())

//challenge
let isValidPassword = function (password) {
    if (password.length > 8 && password.includes) {
        return true 
    }
        else {
            return false
        }
    }
    

console.log(isValidPassword('abscd'))
console.log(isValidPassword('aabcdfgkkkkk00lj'))
console.log(isValidPassword('abscdhhh65password#$'))

