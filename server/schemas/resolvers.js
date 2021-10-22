// Functions connected to each query or mutation
const { Book } = require('../models')

const resolvers = {
    // similar to Get in REST API
    Query: {
        books: async () => {
            return Book.find()
        },

        book: async(parent, {title}) => {
            return Book.findOne({title})
        }
    },

    // similar to Post, Put, and Delete in REST API
    Mutation: {
        addBook: async(parent, args) => {
            const book = await Book.insertMany(args)
            return book
        }
    }
}

module.exports = resolvers