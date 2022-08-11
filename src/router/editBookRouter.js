const express = require('express')
const router = express.Router()
const books = require('../model/bookModel')

router.put('/',(req,res)=>{

    id = req.body._id

    Title = req.body.Title
    Author = req.body.Author
    Rating = req.body.Rating

    books.findByIdAndUpdate({'_id':id},
                            {$set:{
                                "Title" : Title,
                                "Author" : Author,
                                "Rating" : Rating
                            }})
        .then(()=>{
            res.send()
        })

})

module.exports = router;