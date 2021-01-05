import {GraphQLServer, PubSub} from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import User from './resolvers/User'
import Product from './resolvers/Product'
import Review from './resolvers/Review'
// import Subscription from './resolvers/Subscription'

const pubsub = new PubSub()

const server = new GraphQLServer({
    typeDefs : './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        // Subscription,
        User,
        Product,
        Review
    },
    context: {
        db,
        pubsub
    }
})

server.start(() => {
    console.log("Server running")
})