let myBook = {
    title: '1984',
    author: 'George orwell',
    pagecount:350
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)


let bioData = {
    name: 'Madhurima',
    age: 25,
    location: 'California'
   
}

console.log(`${bioData.name} is ${bioData.age} and lives in ${bioData.location}`)

bioData.age = bioData.age + 1
console.log(`${bioData.name} is ${bioData.age} and lives in ${bioData.location}`)
