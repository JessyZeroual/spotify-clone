import React from "react";
import { ScrollView } from "react-native";
import { Container } from "../../styles/commonStyled";
import AlbumList from "../../components/AlbumList/AlbumList";
import Loader from "../../components/Loader/Loader";
import useAlbums from "../../hooks/useAlbums";

const HomePage: React.FC = () => {
  const {
    loading,
    newAlbumsReleases,
    trendyAlbums,
    recommendedAlbums
  } = useAlbums();

  if (loading) return <Loader />;

  return (
    <Container>
      <ScrollView>
        <AlbumList
          nameList="Dernières sorties populaires"
          data={newAlbumsReleases}
        />
        <AlbumList nameList="Trending actuellement" data={trendyAlbums} />
        <AlbumList nameList="Recommandé pour vous" data={recommendedAlbums} />
      </ScrollView>
    </Container>
  );
};

export default HomePage;