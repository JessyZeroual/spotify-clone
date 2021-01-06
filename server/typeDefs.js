const { gql } = require("apollo-server");

const typeDefs = gql`
  type Image {
    height: Int
    url: String
    width: Int
  }
  type Artist {
    id: String
    name: String
    images: [Image]
  }
  type Album {
    name: String
  }
  type Music {
    name: String
  }

  type Query {
    artists(searchTerms: String!): [Artist]
    albums: [Album]
    musics: [Music]
    getToken: String
  }
`;

module.exports = typeDefs;
