import React, { useContext } from "react";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { ThemeContext } from "styled-components";
import { useQuery } from "@apollo/client";
import GET_ALBUMS_BY_ARTIST from "../../gql/Query/albumsByArtist";
import { Text } from "../../styles/commonStyled";
import {
  Container,
  WrapperList,
  WrapperIcon,
  Icon,
  Image,
  WrapperText
} from "./ArtistPage.styled";
import getFontSizeFromNumberOfCharacters from "../../utils/getFontSizeFromNumberOfCharacters";
import truncateString from "../../utils/truncateString";
import AlbumList from "../../components/AlbumList/AlbumList";
import Loader from "../../components/Loader/Loader";
import Logo from "../../assets/user.jpg";

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
      <WrapperList>
        {loading ? (
          <Loader />
        ) : (
          <AlbumList nameList="" data={data.albumsByArtist} />
        )}
      </WrapperList>
    </Container>
  );
};

export default Artistpage;
