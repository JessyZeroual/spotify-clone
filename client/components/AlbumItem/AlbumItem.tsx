import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { WrapperAlbumItem, Image } from "./AlbumItem.styled";
import { Text } from "../../styles/commonStyled";
import truncateString from "../../utils/truncateString";
import Logo from "../../assets/user.jpg";

const AlbumItem: React.FC<{
  id: string;
  name: string;
  uri: string;
  type: string;
  artistName: string;
}> = ({ id, name, uri, type, artistName }) => {
  const themeContext = useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <WrapperAlbumItem
      onPress={() =>
        navigation.navigate("Album", {
          albumId: id,
          name,
          uri,
          type,
          artistName
        })
      }
    >
      <Image
        source={
          uri
            ? {
                uri
              }
            : Logo
        }
      />
      <Text bold>{truncateString(name, 18)}</Text>
      <Text color={themeContext.colors.lightGrey}>
        {type} • {truncateString(artistName, 15)}
      </Text>
    </WrapperAlbumItem>
  );
};

export default AlbumItem;
