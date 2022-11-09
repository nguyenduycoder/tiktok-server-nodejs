
var express = require('express');
var app = express()
var cors = require('cors')
var serveron = 3001;

var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extends: false, limit: '50mb' }))
app.use(bodyparser.json({ limit: '50mb' }))
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))



var userRouter = require('./src/routers/user.router')
var loginRouter = require('./src/routers/login.router')
var uploadRouter = require('./src/routers/upload.router')

app.use('/api/user', userRouter)
app.use('/api/login', loginRouter)
app.use('/api/upload', uploadRouter)


app.listen(serveron, function () {
    console.log('Server listen on :', serveron)
})