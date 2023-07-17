let convertFahrenheitToCelsius = function (fahrenheit) {
    let result = (fahrenheit - 32) * 5 / 9
    return result
}

let value = convertFahrenheitToCelsius(32)
let otherValue = convertFahrenheitToCelsius(68)

console.log(value)
console.log(otherValue)




let convertCelsiusToFahrenheit = function (celsius) {
    let fahrenheit = (9 * celsius / 5) + 32
    return fahrenheit
}

let tempOne = convertCelsiusToFahrenheit(0)
let tempTwo = convertCelsiusToFahrenheit(20)

console.log(tempOne)
console.log(tempT