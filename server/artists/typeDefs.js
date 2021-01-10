const { gql } = require("apollo-server");

const typeDef = gql`
  type Artist {
    id: String
    name: String
    images: [Image]
  }

  extend type Query {
    artists(searchTerms: String!): [Artist]
  }
`;

module.exports = {
  typeDef,
};
