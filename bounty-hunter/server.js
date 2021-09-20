const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
//Middleware for every req
app.use(express.json())
app.use(morgan('dev'))
//Connect to DB
mongoose.connect('mongodb://localhost:27017/bountydb', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Connected to DB')
    )
//Route
app.use('/targets', require('./routes/targetRouter.js'))
//Error Handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})
//Server listen
app.listen(8233, () => {
    console.log('ATTN: Server running on PORT 8233');
})