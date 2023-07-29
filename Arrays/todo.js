let todos = [{
    text: 'Eat Breakfast ',
    completed: true
}, {
    text: 'Clean House',
    completed: false
}, {
    text: 'Cook Lunch',
    completed: true
}, {
    text: 'Do gym',
    completed: false
}, {
    text: 'Do gym',
    completed: false
}, {
    text: 'Do gym',
    completed: false
}, {
    text: 'Do gym',
    completed: false
}, {
    text: 'Do gym',
    completed: false
}, {
    text: 'Do gym',
    completed: false
}, {
    text: 'Do gym',
    completed: false
}, {
    text: 'Do Coding',
    completed: true
}]

console.log(todos) 

const deleteTodo = function (todos, todoText) {
    // == Store the position of the deletable entry ==
    // ..
    // in order to find the deletable entry we need to call this.findIndex()
    // The findIndex() call must be supplied with a callback function 
    // which returns true for any entry which contains todoText in 
    // the entry.text field.
    // ..
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

// Inputs:
//      todos := array of objects
//      todoText := simple text description to match from todos
// Outputs:
//      return value := array of objects with all matching entries deleted.
const deleteAllMatchingTodos = function (todos, todoText) {
    const newArray = []
    // go through all elements one by one
    for (i = 0; i < todos.length; i++) {
        if(todos[i].text.toLowerCase() === todoText.toLowerCase()) {
            continue
        }
        newArray.push(todos[i])
    }
    return newArray
}


const deleteAllTodo = function (todos, todoText) {
    // == Store the position of the deletable entry ==
    // ..
    // in order to find the deletable entry we need to call this.findIndex()
    // The findIndex() call must be supplied with a callback function 
    // which returns true for any entry which contains todoText in 
    // the entry.text field.
    // ..
    var index = 0;
    while(index > -1) {
        index = todos.findIndex(function (todo) {
            return todo.text.toLowerCase() === todoText.toLowerCase()
        })
        if (index > -1) {
            todos.splice(index, 1)
        }
    }
}

// deleteTodo(todos, 'Do gym')
todos = deleteAllMatchingTodos(todos, 'Do gym')
console.log(todos)


/**
 * function findIndex(callbackFunc) {
 *   for(i = 0; i < this.length; i++) {
 *     let currentElement = this[i];
 *      if(callbackFunc(currentElement) === true) {
 *          return i;
 *      }
 *   }
 * }
 * 
 */


