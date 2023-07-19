let myBook = {
    title: '1984',
    author: 'George orwell',
    pagecount: 350
}
let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pagecount: 723
}
let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pagecount} pages long.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.pageCountSummary)




let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

let finalTemp = convertFahrenheit(55)
console.log(finalTemp)


