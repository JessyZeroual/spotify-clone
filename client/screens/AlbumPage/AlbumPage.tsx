import React, { useContext } from "react";
import { SafeAreaView } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { ThemeContext } from "styled-components";
import { useQuery } from "@apollo/client";
import GET_TRACKS_BY_ALBUM from "../../gql/tracks/Query/tracksByAlbum";
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
import Logo from "../../assets/vinyl.jpg";

import TrackList from "../../components/TrackList/TrackList";
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
  const { loading, data } = useQuery(GET_TRACKS_BY_ALBUM, {
    variables: { id: albumId }
  });

  return (
    <Container>
      <Image
        source={
          uri
            ? {
                uri
              }
            : Logo
        }
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
          <TrackList nameList="" data={data.tracksByAlbum} />
        )}
      </SafeAreaView>
    </Container>
  );
};

export default AlbumPage;
