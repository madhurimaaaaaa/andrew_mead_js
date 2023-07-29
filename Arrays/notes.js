const notes = ['Note 1', 'Note 2', 'Note 3', 'note 4']
//console.log(notes.pop())
//notes.push('My new note')

//console.log(notes.shift())
//notes.unshift('My first note')

//otes.splice(3, 2, 'This is new note')
//notes[1] = 'This is now note 3'

//console.log(notes.length)
//
//console.log(notes[notes.length - 3])
console.log(notes)

for (let count = 0; count <= 3; count++) {
    console.log(count)
}

for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count])
}


// many assignments pending in this file.
// TODO(2023/07/29)

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return noteTitle === noteTitle

    })
    
}
const note = findNote(notes, 'Office')










// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//        return noteTitle === noteTitle

//     })
//     return notes[index]
// }
// const note = findNote(notes, 'Office')





const index = notes.findIndex(function (note, index) {
    return note.title === 'ABCD'
})
console.log(index)