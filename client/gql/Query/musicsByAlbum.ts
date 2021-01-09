import { gql } from "@apollo/client";

export default gql`
  query musicsByAlbum($id: String!) {
    musicsByAlbum(id: $id) {
      id
      name
      artists {
        id
        name
      }
    }
  }
`;
