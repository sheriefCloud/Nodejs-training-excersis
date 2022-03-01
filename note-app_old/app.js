
// npm modules 
const chalk = require('chalk')
const { demandCommand, demandOption } = require('yargs')
const yargs = require('yargs')


//Application Modules
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// commands setup add, remove, read, list

// Add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){ 
        notes.addNote(argv.title,argv.body)
    }
})

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// List command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() { 
        notes.listNotes()
    }
})

// read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { 
        notes.readNote(argv.title)
    }
})

yargs.parse()


// console.log(yargs.argv)













