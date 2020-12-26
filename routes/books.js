const express = require('express');
const Book = require('../models/Book');
module.exports = app => {
    // Get all book
    //Without async await, we won't be able to fetch the data
    app.get('/books', async (req, res) =>{
        try{
            const books = await Book.find({});
            res.send(books);
        } catch(err){
            console.log(`[ERROR!!!]: ${err}`);
        };
    });

    //Get a book by id
    app.get('/books/:id', async (req, res) =>{
        try{
            const book = await Book.findById(req.params.id);
            res.send(book);
        } catch(err){
            console.log(`[ERROR!!!]: no book found with the id: ${req.params.id}`);
        };
    });

    //Post a book
    app.post('/books', async (req, res)=>{
        const { isbn, title, subtitle, author, publisher, pages } = req.body;
        const book = new Book({
            isbn, 
            title, 
            subtitle, 
            author, 
            publisher, 
            pages
        });
        try{
            const newbook = await book.save();
            // console.log(req.body);
            res.sendStatus(201);
        } catch(err){
            console.log(`[ERROR!!!]:${err}`);
        };
    });
}