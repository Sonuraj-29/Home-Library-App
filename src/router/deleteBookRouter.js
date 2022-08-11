const express = require('express');
const router = express.Router();
const books = require('../model/bookModel')

router.delete('/:id', (req,res)=>{
    id = req.params.id;

    books.findByIdAndDelete({"_id":id})
    .then(()=>{
        res.send()
    })
})

module.exports = router;