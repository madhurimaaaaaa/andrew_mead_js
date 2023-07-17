let convertCelsiusToFahrenheit = function (celsius) {
    let fahrenheit = (9 * celsius / 5) + 32
    if (celsius <= 0) {
        let isFreezing = true
    }
    return fahrenheit
}


let tempOne = convertCelsiusToFahrenheit(0)
let tempTwo = convertCelsiusToFahrenheit(20)

console.log(tempOne)
console.log(tempTwo)
// global scope (convertftoc, tempone, temptwo)
  // local scope (fahrenheit, celsius)
    // local scope (isFreezing)
