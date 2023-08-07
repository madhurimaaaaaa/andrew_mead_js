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

  const findNote =function (notes, query) {

  
   return notes.filter(function (note, index) {
   const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
   const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
   return isTitleMatch || isBodyMatch

})
  }
console.log(findNote(notes, 'Turkey'))