
var express = require('express');
var app = express()
var cors = require('cors')
var serveron = 3001;

var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extends: false }))
app.use(bodyparser.json())
app.use(cors())


var userRouter = require('./src/routers/user.router')
var loginRouter = require('./src/routers/login.router')
var uploadRouter = require('./src/routers/upload.router')
app.get('/', (req, res) => res.send('hello worl'))
app.use('/api/', userRouter)
app.use('/api/login', loginRouter)
app.use('/api/upload', uploadRouter)

app.listen(serveron, function () {
    console.log('Server listen on :', serveron)
})