const fs = require('fs')
const chalk = require('chalk')
const readFile = () => {
    try {
        customers = JSON.parse(fs.readFileSync('customers.json').toString())
    }
    catch (e) {
        customers = []
    }
    return customers
}
const writeFile = (customers) => {
    fs.writeFileSync('customers.json', JSON.stringify(customers))
}
const addCust = (customer) => {
    customers = readFile()
    customers.push(customer)
    customers.forEach((customer, i) => {
        customer.id = i + 1
    });
    writeFile(customers)
}
const showCust = (id) => {
    customers = readFile()
    customers.forEach(customer => {
        if (customer.id == id) return shown = customer
    })
    if (typeof shown == 'undefined') console.log(chalk.bold.red('this id is non-existant'))
    else console.log(shown)
}
const addBalance = (id, balance) => {
    customers = readFile()
    customers.forEach(customer => {
        if (customer.id == id) customer.balance += balance
    })
    writeFile(customers)
}
const deleteCust = (id) => {
    customers = readFile()
    index = customers.findIndex(customer => {
        return customer.id == id
    })
    if (index != -1) {
        customers.splice(index, 1)
        console.log(chalk.italic.magenta('deleted'))
        customers.forEach((customer, i) => {
            customer.id = i + 1
        });
    }
    else console.log(chalk.bold.green('this id is non-existant'))
    writeFile(customers)
}

module.exports = { addCust, readFile, showCust, addBalance, deleteCust }