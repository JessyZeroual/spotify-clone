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
    id: String
    name: String
    type: String
    images: [Image]
    totalTracks: Int
    releaseDate: String
    artistId: String
    artistName: String
  }
  type Music {
    name: String
  }

  type Query {
    artists(searchTerms: String!): [Artist]
    albums: [Album]
    musics: [Music]
    newAlbumsReleases: [Album]
    trendyAlbums: [Album]
    recommendedAlbums: [Album]
  }
`;

module.exports = typeDefs;
