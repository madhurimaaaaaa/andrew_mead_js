const notes = [{
    title: 'My next trip',
    body: 'To LA'
}, {
    title: 'My second trip',
    body : 'To Mexico'
}, {
    title: 'My third trip',
    body : 'To Turkey'
}, {
    title: 'My third trip',
    body: 'To New York'
}]
console.log(notes)
console.log(notes.length)
console.log({} !== {})

let fewObject = {}
let otherObject = fewObject
console.log(fewObject === otherObject)

console.log(notes)
const index = notes.findIndex(function (note, index) {
    console.log(notes)
    return note.title === 'My second trip'


})
console.log(index)
