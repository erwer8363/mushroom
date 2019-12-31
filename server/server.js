/**
 * Created by ever on 2019/12/8.
 */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')
// 新建app
const app = express()

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

app.listen(9093, () => {
    console.log('node app runs on port 9093')
})