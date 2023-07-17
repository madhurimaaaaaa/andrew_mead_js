let name = 'Madhurima'
let age = 25
console.log(`Hey, my name is ${name}! I am ${age} years old.`)


let getTip = function (total = $40, tipPercent = .25) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $40 would be ${tip}`
}
let tip = getTip(40)
    
console.log(tip)

