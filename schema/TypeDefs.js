const { gql } = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  type Teaser {
    title: String!
    body: String!
    link: String!
  }
  
  type Query {
    teasers: [Teaser!]!
    hello: String!
  }
`;

module.exports = { typeDefs }


