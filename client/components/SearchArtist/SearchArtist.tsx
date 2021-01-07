import React, { useState, useEffect } from "react";
import { TextInput } from "react-native";
import { useLazyQuery } from "@apollo/client";
import GET_ARTISTS from "../../gql/Query/getArtists";
import { Container, Text } from "./SearchArtist.styled";

const SearchArtist: React.FC = () => {
  const [searchTerms, setSearchTerms] = useState("");
  const [executeSearch, { data }] = useLazyQuery(GET_ARTISTS, {
    variables: { searchTerms }
  });

  console.log(data);

  useEffect(() => {
    executeSearch();
  }, [searchTerms]);

  return (
    <Container>
      <Text>recherche</Text>
      <TextInput
        style={{ width: 200, height: 50 }}
        onChangeText={(terms) => setSearchTerms(terms)}
      />
    </Container>
  );
};

export default SearchArtist;
