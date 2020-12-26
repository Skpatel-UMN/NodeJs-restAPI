const mongoose = require('mongoose');
const schema = mongoose.Schema;

const bookSchema = new schema({
    isbn: Number,
        title: String,
        subtitle: String,
        author: String,
        publisher: String,
        pages: Number
}, {timestamps: true});
//create the model from schema

const Books = mongoose.model('Books', bookSchema);

module.exports = Books;