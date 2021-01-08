import React, { useState, useEffect, useContext } from "react";
import { useLazyQuery } from "@apollo/client";
import { ThemeContext } from "styled-components";
import GET_ARTISTS from "../../gql/Query/artists";
import { Container, Text } from "../../styles/commonStyled";
import { Input, WrapperSearch, Icon } from "./SearchPage.styled";
import SearchList from "../../components/SearchList/SearchList";

const SearchArtist: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const [searchTerms, setSearchTerms] = useState("");
  const [executeSearch, { data }] = useLazyQuery(GET_ARTISTS, {
    variables: { searchTerms }
  });

  useEffect(() => {
    executeSearch();
  }, [searchTerms]);

  return (
    <Container edges={["right", "left", "top"]}>
      <Text bold fontSize={themeContext.fontSizes.h1}>
        Rechercher
      </Text>

      <WrapperSearch>
        <Icon name="search1" size={20} />
        <Input
          placeholder="Rechercher un artiste"
          onChangeText={(terms) => setSearchTerms(terms)}
        />
      </WrapperSearch>

      {data?.artists && <SearchList artists={data?.artists} />}
    </Container>
  );
};

export default SearchArtist;
