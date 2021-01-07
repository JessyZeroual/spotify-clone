import { gql } from "@apollo/client";

export default gql`
  query newreleases {
    newReleases {
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
