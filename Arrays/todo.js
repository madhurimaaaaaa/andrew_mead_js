const todos = ['Eat breakfast', 'Clean house', 'Cook lunch', 'Do gym', 'Do coding']


todos.splice(2, 1)
todos.push('Make dinner')
todos.shift()


console.log(`You have ${todos.length} todos!`)
console.log(todos)