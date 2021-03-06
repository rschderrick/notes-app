const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');

//add, remove, read, list

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
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
    handler: function(argv) {
        console.log('Title: ', argv.title);
        console.log('Body: ', argv.body);
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    handler: function() {
        console.log('Removing a note!');
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'Create a list.',
    handler: function() {
        console.log('Creating a list!');
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note.',
    handler: function() {
        console.log('Reading a note!');
    }
})

yargs.parse();