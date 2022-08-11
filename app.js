const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken')

const homeRouter = require('./src/router/bookRouter')
const addBookRouter = require('./src/router/addBookRouter')
const deleteBookRouter = require('./src/router/deleteBookRouter')
const editBookRouter = require('./src/router/editBookRouter')
const loginRouter = require('./src/router/loginRouter');

const app = new express();
app.use(cors());
app.use(express.json());

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

app.use('/books', homeRouter);
app.use('/add',verifyToken, addBookRouter);
app.use('/remove', verifyToken, deleteBookRouter)
app.use('/edit', verifyToken, editBookRouter)
app.use('/login', loginRouter)

const port = process.env.PORT || 8080 ;

app.listen(port,function(){
    console.log('Listening on port '+port)
})