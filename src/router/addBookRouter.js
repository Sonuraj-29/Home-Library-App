const express = require('express');
const router = express.Router();
const books = require('../model/bookModel')

router.post('/', (req,res)=>{
    // res.header("Access-Control-Allow-Origin", "*")
    // res.header("Access-Control-Allow-Methods : GET POST PUT DELETE PATCH")

   var newBook = {
        Title : req.body.book.Title,
        Author : req.body.book.Author,
        Rating : req.body.book.Rating
   }
    var newBook = new books(newBook)

    newBook.save()

})

module.exports = router;