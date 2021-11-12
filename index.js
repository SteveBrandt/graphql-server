const { ApolloServer, gql } = require('apollo-server');
const { typeDefs }= require('./schema/TypeDefs')
const { resolvers }= require('./schema/Resolvers')

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
