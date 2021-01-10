const { gql } = require("apollo-server");

const typeDef = gql`
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

  extend type Query {
    newAlbumsReleases: [Album]
    trendyAlbums: [Album]
    recommendedAlbums: [Album]
    albumsByArtist(id: String): [Album]
  }
`;

module.exports = {
  typeDef,
};
