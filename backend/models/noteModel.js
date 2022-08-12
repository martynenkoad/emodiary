// requires
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// note Schema
const noteSchema = new Schema({
    title: {
        type: String
    },
    note: {
        type: String
    },
    user_id: {
        type: String, 
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Note', noteSchema)
