const mongoose = require('mongoose');
const express = require('express');
const chalk = require('chalk');

const config = require('./config');
const Book = require('./models/Book');

const log = console.log;

const app = express();


//mongoose connection to ATLAS DB

//mongoose.connect returns a promise,
// As shown below, we can use the promise resolve to display some message or 
//if an error occurs, it emits an error event, which we can catch and handle it

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
                .then(()=> log(chalk.green(`[Ready to USE... ]`)))
                .catch((err) =>{
                    log(chalk.red('[Connection Error!!!...]'));
                });

// Once a connect promise has been returned we can call the .connection method to handle CRUD operations
const client = mongoose.connection;

client.on('error', console.error.bind(console, 'connection error'));

client.once('open', () =>{
    // create Schema to perform CRUD operations
    log(chalk.green(`[CONNECTED to MongoDB... ]`));
    const book = new Book(
        {isbn: 9781593275846,
        title: "Eloquent JavaScript, Second Edition",
        subtitle: "A Modern Introduction to Programming",
        author: "Marijn Haverbeke",
        publisher: "No Starch Press",
        pages: 472,
    });
    book.save((err)=>{
        if (err){
            log(`[ERROR in updating db]`);
        };
    });
});



app.listen(config.PORT, () =>{
log(chalk.cyan(`[SERVER listening at PORT: ${config.PORT}]`));
});


