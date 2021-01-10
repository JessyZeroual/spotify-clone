import React, { useState, useEffect, useContext, useRef } from "react";
import { useLazyQuery } from "@apollo/client";
import { ThemeContext } from "styled-components";
import { useFocusEffect } from "@react-navigation/native";
import GET_ARTISTS from "../../gql/artists/Query/artists";
import { Container, Text } from "../../styles/commonStyled";
import {
  Input,
  WrapperSearch,
  WrapperHeader,
  Icon,
  Image
} from "./SearchPage.styled";
import BackgroundImage from "../../assets/searchImage.jpg";
import SearchList from "../../components/SearchList/SearchList";

const SearchArtist: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const [searchTerms, setSearchTerms] = useState("");
  const [shouldInputFocused, setShouldInputFocused] = useState(false);
  const [executeSearch, { data }] = useLazyQuery(GET_ARTISTS, {
    variables: { searchTerms }
  });

  const inputRef = useRef<any>(null);

  useEffect(() => {
    executeSearch();
  }, [searchTerms]);

  useEffect(() => {
    if (shouldInputFocused) inputRef.current.focus();
  }, [shouldInputFocused]);

  useFocusEffect(
    React.useCallback(() => {
      setShouldInputFocused(true);
      return () => {
        setShouldInputFocused(false);
      };
    }, [])
  );

  return (
    <Container edges={["right", "left", "top"]}>
      <WrapperHeader>
        <Text bold fontSize={themeContext.fontSizes.h1}>
          Rechercher
        </Text>
        <WrapperSearch>
          <Icon name="search1" size={20} />
          <Input
            ref={inputRef}
            placeholder="Rechercher un artiste"
            onChangeText={(terms) => setSearchTerms(terms)}
            autoCorrect={false}
          />
        </WrapperSearch>
      </WrapperHeader>

      {!searchTerms && <Image source={BackgroundImage} />}
      {data?.artists && <SearchList artists={data?.artists} />}
    </Container>
  );
};

export default SearchArtist;
