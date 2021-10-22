const { Schema, model } = require('mongoose')

const BookSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    }
})

const Book = model('Book', BookSchema)

module.exports = Book