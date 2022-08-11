const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const path = require('path')

const homeRouter = require('./src/router/bookRouter')
const addBookRouter = require('./src/router/addBookRouter')
const deleteBookRouter = require('./src/router/deleteBookRouter')
const editBookRouter = require('./src/router/editBookRouter')
const loginRouter = require('./src/router/loginRouter');

const app = new express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))

function verifyToken(req,res,next){

    if(!req.headers.authorization)
        {
            return res.send('Unauthorized request')
        }
    let token = req.headers.authorization.split(' ')[1]
    if(token == "null")
    {
        return res.send('Unauthorized request')
    }
    let payload = jwt.verify(token, "secretKey")
    req.userId = payload.subject
    next()
}

app.use('/api/books', homeRouter);
app.use('/api/add',verifyToken, addBookRouter);
app.use('/api/remove', verifyToken, deleteBookRouter)
app.use('/api/edit', verifyToken, editBookRouter)
app.use('/api/login', loginRouter)

app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))
})

const port = process.env.PORT || 8080 ;

app.listen(port,function(){
    console.log('Listening on port '+port)
})