// challenge
let myAccount = {
    name: 'Madhurima',
    expense: 0,
    income: 0
}
let addExpense = function (account, amount) {
    account.expense = account.expense + amount
}

let addIncome = function (account, income) {
    account.income = account.income + income
}
let resetAccount = function (account) {
    account.expense = 0
    account.income = 0
}
let accountSummary = function (account) {
    let balance = account.income - account.expense
    return `Account for ${account.name} has $${balance}. $${account.income} in income.`
}
addIncome(myAccount, 5000)
addExpense(myAccount, 2)
addExpense(myAccount, 30)
console.log(accountSummary(myAccount))