const express = require('express');
const router = express.Router();
const books = require('../model/bookModel')

router.get('/:id',(req,res)=>{
    const id = req.params.id

    books.findOne({"_id":id})
    .then((book)=>{
        res.send(book)
    })
})

router.get('/',(req,res)=>{
    books.find()
    .then(function(books){
        res.send(books);
    })
})

module.exports = router;