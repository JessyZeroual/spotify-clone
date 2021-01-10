import { gql } from "@apollo/client";

export default gql`
  query albumsByArtist($id: String!) {
    albumsByArtist(id: $id) {
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
