const express = require('express')

const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schemas')

const db = require('./config/connection')
const PORT = process.env.PORT || 3001

const app = express()

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.applyMiddleware({ app })
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

db.once('open', () => {
    console.log('DB is connected')
    app.listen(PORT, () => {
        console.log(`App is running and waiting on incoming request at http://localhost${PORT}`)
        console.log(`The graphQL playground that is configured here http://localhost:${PORT}${server.graphqlPath}`)
    })
})