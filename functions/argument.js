let findTipPercent = function (total , tipPercent = .2) {
    return total * tipPercent
}
let tip = findTipPercent(1000, .30)
console.log(tip)
