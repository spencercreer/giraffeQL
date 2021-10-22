const express = require('express')

const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schemas')

const db = require('./config/connection')
const PORT = process.env.PORT || 3001

const app = express()

let apollo_server;
async function startServer() {
  apollo_server = new ApolloServer({
    typeDefs,
    resolvers
  });
  await apollo_server.start();
  // applyMiddleware connects the Apollo Server to Express
  apollo_server.applyMiddleware({ app });
}
// start apollo server
startServer();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

db.once('open', () => {
    console.log('DB is connected')
    app.listen(PORT, () => {
        console.log(`App is running and waiting on incoming request at http://localhost${PORT}`)
        console.log(`The graphQL playground that is configured here http://localhost:${PORT}${apollo_server.graphqlPath}`)
    })
})