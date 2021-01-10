const { gql } = require("apollo-server");

const typeDef = gql`
  type Track {
    id: String
    name: String
    artists: [Artist]
  }

  extend type Query {
    tracksByAlbum(id: String): [Track]
  }
`;

module.exports = {
  typeDef,
};
