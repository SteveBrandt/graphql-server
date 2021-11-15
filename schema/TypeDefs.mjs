import { gql } from 'apollo-server';

// The GraphQL schema
const typeDefs = gql`
  type Teaser {
    title: String!
    body: String!
    link: String!
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
  }
`;

export { typeDefs };


