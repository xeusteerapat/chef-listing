import { gql } from 'apollo-server';

const typeDefs = gql`
  type Chef {
    id: ID!
    name: String!
    restuarants: [Restaurant!]!
  }

  type Restaurant {
    id: ID!
    name: String!
  }

  type Query {
    chefs: [Chef!]!
  }
`;

export default typeDefs;
