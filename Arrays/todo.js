const todos = ['Eat breakfast', 'Clean house', 'Cook lunch', 'Do gym', 'Do coding']


todos.splice(2, 1)
todos.push('Make dinner')
todos.shift()


console.log(`You have ${todos.length} todos!`)

todos.forEach(function (todos, index) {
    const num = index + 1
    console.log(`${num}. ${todos}`)
})

for (let count = 3; count < todos.length; count++) {
    const num = count + 1
    const todo = todos[count]
    console.log(`${num}. ${todo}`)
}