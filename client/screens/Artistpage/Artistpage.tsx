import React, { useContext } from "react";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { ThemeContext } from "styled-components";
import { useQuery } from "@apollo/client";
import GET_ALBUMS_BY_ARTIST from "../../gql/albums/Query/albumsByArtist";
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
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
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
  const { loading, error, data } = useQuery(GET_ALBUMS_BY_ARTIST, {
    variables: { id: artistId }
  });

  if (loading) return <Loader />;
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
            {truncateString(name, 20)}
          </Text>
        </WrapperText>
      </Image>
      {error ? (
        <ErrorMessage />
      ) : (
        <WrapperList>
          <AlbumList nameList="" data={data.albumsByArtist} />
        </WrapperList>
      )}
    </Container>
  );
};

export default Artistpage;
