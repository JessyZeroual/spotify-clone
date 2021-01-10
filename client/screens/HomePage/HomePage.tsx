import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Container, Text } from "../../styles/commonStyled";
import {
  WrapperSearch,
  WrapperList,
  WrapperHeader,
  Icon
} from "./HomePage.styled";
import AlbumList from "../../components/AlbumList/AlbumList";
import Loader from "../../components/Loader/Loader";
import useAlbums from "../../hooks/useAlbums";

const HomePage: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const navigation = useNavigation();
  const {
    loading,
    newAlbumsReleases,
    trendyAlbums,
    recommendedAlbums
  } = useAlbums();

  if (loading) return <Loader />;

  return (
    <Container edges={["right", "left", "top"]}>
      <WrapperHeader>
        <WrapperSearch
          onPress={() =>
            navigation.navigate("Recherche", { shouldFocus: true })
          }
        >
          <Icon name="search1" size={20} />
          <Text
            style={{ flex: 1 }}
            color={themeContext.colors.lightGrey}
            fontSize={themeContext.fontSizes.h3}
          >
            Rechercher un artiste
          </Text>
        </WrapperSearch>
      </WrapperHeader>

      <WrapperList>
        <AlbumList
          nameList="Dernières sorties populaires"
          data={newAlbumsReleases}
        />
        <AlbumList nameList="Trending actuellement" data={trendyAlbums} />
        <AlbumList nameList="Recommandé pour vous" data={recommendedAlbums} />
      </WrapperList>
    </Container>
  );
};

export default HomePage;
