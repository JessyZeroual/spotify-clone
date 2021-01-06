import { gql } from "@apollo/client";

export default gql`
  query artists($searchTerms: String!) {
    artists(searchTerms: $searchTerms) {
      id
      name
      images {
        url
        width
        height
      }
    }
  }
`;
