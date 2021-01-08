import React from "react";
import { useQuery } from "@apollo/client";
import { ScrollView } from "react-native";
import GET_NEW_ALBUMS_RELEASES from "../../gql/Query/newAlbumsReleases";
import GET_TRENDY_ALBUMS from "../../gql/Query/trendyAlbums";
import { Container } from "../../styles/commonStyled";
import AlbumList from "../AlbumList/AlbumList";
import Loader from "../Loader/Loader";

const HomePage: React.FC = () => {
  const newAlbumsReleases = useQuery(GET_NEW_ALBUMS_RELEASES);
  const trendyAlbums = useQuery(GET_TRENDY_ALBUMS);

  if (newAlbumsReleases.loading || trendyAlbums.loading) return <Loader />;

  return (
    <Container>
      <ScrollView>
        <AlbumList
          nameList="Dernières sorties populaires"
          data={newAlbumsReleases.data.newAlbumsReleases}
        />
        <AlbumList
          nameList="Trending actuellement"
          data={trendyAlbums.data.trendyAlbums}
        />
        <AlbumList
          nameList="Trending actuellement"
          data={trendyAlbums.data.trendyAlbums}
        />
      </ScrollView>
    </Container>
  );
};

export default HomePage;
