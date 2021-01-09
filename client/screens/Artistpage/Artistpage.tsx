import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { ThemeContext } from "styled-components";
import { useQuery } from "@apollo/client";
import GET_ALBUMS_BY_ARTIST from "../../gql/Query/albumsByArtist";
import { Text } from "../../styles/commonStyled";
import {
  Container,
  WrapperIcon,
  Icon,
  Image,
  WrapperText
} from "./ArtistPage.styled";
import getFontSizeFromNumberOfCharacters from "../../utils/getFontSizeFromNumberOfCharacters";
import AlbumList from "../../components/AlbumList/AlbumList";
import Loader from "../../components/Loader/Loader";

type ParamList = {
  Detail: {
    artistId: string;
    name: string;
    uri?: string;
  };
};

const Artistpage: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, "Detail">>();
  const navigation = useNavigation();
  const themeContext = useContext(ThemeContext);
  const { artistId, name, uri } = route.params;
  const { loading, data } = useQuery(GET_ALBUMS_BY_ARTIST, {
    variables: { id: artistId }
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
            {name}
          </Text>
        </WrapperText>
      </Image>
      <ScrollView>
        {loading ? (
          <Loader />
        ) : (
          <AlbumList nameList="" data={data.albumsByArtist} />
        )}
      </ScrollView>
    </Container>
  );
};

export default Artistpage;
