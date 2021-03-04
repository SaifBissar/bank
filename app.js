const yargs = require('yargs')
const methods = require('./functions')
yargs.command({
    command: 'addCust',
    builder: {
        id: {
            type: 'number',
            demandOption: false
        },
        name: {
            type: 'string',
            demandOption: true
        },
        balance: {
            type: 'number',
            demandOption: true
        }
    },
    handler: function (argv) {
        let customer = {
            id: '',
            name: argv.name,
            balance: argv.balance
        }

        methods.addCust(customer)
    }
})
yargs.command({
    command: 'showCust',
    builder: {
        id: {
            type: 'number',
            demandOption: true
        }
    },
    handler: function (argv) {
        methods.showCust(argv.id)
    }
})
yargs.command({
    command: 'addBalance',
    builder: {
        id: {
            type: 'number',
            demandOption: true
        },
        balance: {
            type: 'number',
            demandOption: true
        }
    },
    handler: function (argv) {
        methods.addBalance(argv.id, argv.balance)
    }
})
yargs.command({
    command: 'delete',
    builder: {
        id: {
            type: 'number',
            demandOption: true
        }
    },
    handler: function (argv) {
        methods.deleteCust(argv.id)
    }
})

yargs.argv