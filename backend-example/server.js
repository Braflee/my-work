const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/practice-db', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
() => console.log('Connected to database'))

app.use('/books', require('./routes/bookRouter.js'))
app.use('/authors', require('./routes/authorRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8233, () => {
    console.log('ATTN: Server is running on PORT 8233')
})