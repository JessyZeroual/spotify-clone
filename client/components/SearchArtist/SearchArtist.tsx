import React, { useState, useEffect } from "react";
import { TextInput } from "react-native";
import { useLazyQuery } from "@apollo/client";
import GET_ARTISTS from "../../gql/Query/getArtists";

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
    <>
      <TextInput
        style={{ width: 200, height: 50 }}
        onChangeText={(terms) => setSearchTerms(terms)}
      />
    </>
  );
};

export default SearchArtist;
