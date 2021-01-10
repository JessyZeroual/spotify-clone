import { gql } from "@apollo/client";

export default gql`
  query tracksByAlbum($id: String!) {
    tracksByAlbum(id: $id) {
      id
      name
      artists {
        id
        name
      }
    }
  }
`;
