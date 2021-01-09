import React, { useContext } from "react";
import { SafeAreaView } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { ThemeContext } from "styled-components";
import { useQuery } from "@apollo/client";
import GET_MUSICS_BY_ALBUM from "../../gql/Query/musicsByAlbum";
import { Text } from "../../styles/commonStyled";
import {
  Container,
  WrapperIcon,
  Icon,
  Image,
  WrapperText
} from "./AlbumPage.styled";
import getFontSizeFromNumberOfCharacters from "../../utils/getFontSizeFromNumberOfCharacters";
import truncateString from "../../utils/truncateString";

import MusicList from "../../components/MusicList/MusicList";
import Loader from "../../components/Loader/Loader";

type ParamList = {
  Detail: {
    albumId: string;
    name: string;
    uri?: string;
  };
};

const AlbumPage: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, "Detail">>();
  const navigation = useNavigation();
  const themeContext = useContext(ThemeContext);
  const { albumId, name, uri } = route.params;
  const { loading, data } = useQuery(GET_MUSICS_BY_ALBUM, {
    variables: { id: albumId }
  });

  return (
    <Container>
      <Image
        source={{
          uri
        }}
      >
        <WrapperIcon onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" color="white" size={25} />
        </WrapperIcon>
        <WrapperText colors={["transparent", themeContext.colors.black]}>
          <Text bold fontSize={getFontSizeFromNumberOfCharacters(name.length)}>
            {truncateString(name, 30)}
          </Text>
        </WrapperText>
      </Image>
      <SafeAreaView style={{ flex: 1 }}>
        {loading ? (
          <Loader />
        ) : (
          <MusicList nameList="" data={data.musicsByAlbum} />
        )}
      </SafeAreaView>
    </Container>
  );
};

export default AlbumPage;
