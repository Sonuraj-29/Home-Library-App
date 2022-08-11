const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Library');

const bookSchema = new mongoose.Schema({
    Title : String,
    Author : String,
    Rating : String
})

const Book = mongoose.model('Book',bookSchema);

module.exports = Book;