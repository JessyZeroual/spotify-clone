import { gql } from "@apollo/client";

export default gql`
  query trendyAlbums {
    trendyAlbums {
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
