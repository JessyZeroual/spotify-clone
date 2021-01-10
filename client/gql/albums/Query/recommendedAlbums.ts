import { gql } from "@apollo/client";

export default gql`
  query recommendedAlbums {
    recommendedAlbums {
      id
      name
      type
      totalTracks
      releaseDate
      images {
        width
        url
        height
      }
      artistId
      artistName
    }
  }
`;
