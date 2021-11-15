import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema/TypeDefs.mjs'
import { resolvers } from './schema/Resolvers.mjs'

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
