const mongoose = require('mongoose')
const Schema = mongoose.Schema
//Target Blueprint
const targetSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: String,
    eliminated: Boolean,
    bounty: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('TargetModel', targetSchema)