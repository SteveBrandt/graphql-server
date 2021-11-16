import { gql } from 'apollo-server';

// The GraphQL schema
const typeDefs = gql`
  type Teaser {
    title: String!
    body: String!
    link: String!
  }
  
  type User {
    name: String!
    id: Int!
  }
  
  type DetailContent {
    title: String!
    body: String!
    relatedItems: [Teaser!]!
  }
  
  type Query {
    teasers: [Teaser!]!
    hello: String!
    content: DetailContent!
    allNames: [User!]!
  }
  
  type Mutation {
    createNames(name: String!): User!
    deleteNames(id: ID!): User!
  }
`;

export { typeDefs };


