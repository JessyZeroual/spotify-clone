import { gql } from "@apollo/client";

export default gql`
  query newAlbumsReleases {
    newAlbumsReleases {
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
