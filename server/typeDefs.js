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
    id: String
    name: String
    artists: [Artist]
  }

  type Query {
    artists(searchTerms: String!): [Artist]
    newAlbumsReleases: [Album]
    trendyAlbums: [Album]
    recommendedAlbums: [Album]
    albumsByArtist(id: String): [Album]
    musicsByAlbum(id: String): [Music]
  }
`;

module.exports = typeDefs;
