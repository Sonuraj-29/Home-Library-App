const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('',(req,res)=>{
    let userData = req.body;

    let username = userData.username;
    let password = userData.password;

    let payload = {subject : username+password};
    let token = jwt.sign(payload, 'secretKey')

    res.send({token})

})

module.exports = router;