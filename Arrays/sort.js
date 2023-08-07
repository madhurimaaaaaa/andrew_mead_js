const notes = [{
    title: 'My next trip',
    body: 'To LA'
}, {
    title: 'My first trip',
    body : 'To Mexico'
}, {
    title: 'My third trip',
    body : 'To Turkey'
}, {
    title: 'My third trip',
    body: 'To New York'
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.body.toLowerCase() < b.body.toLowerCase()) {
            return -1
        } else if (b.body.toLowerCase() < a.body.toLowerCase()) {
            return 1

        } else {
            return 0
        }
        
    })

}

sortNotes(notes)
console.log(notes)