import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { WrapperAlbumItem, Image } from "./AlbumItem.styled";
import { Text } from "../../styles/commonStyled";
import truncateString from "../../utils/truncateString";

const AlbumItem: React.FC<{
  name: string;
  uri: string;
  type: string;
  artistName: string;
}> = ({ name, uri, type, artistName }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <WrapperAlbumItem>
      <Image
        source={{
          uri
        }}
      />
      <Text bold>{truncateString(name, 18)}</Text>
      <Text color={themeContext.colors.lightGrey}>
        {type} • {truncateString(artistName, 15)}
      </Text>
    </WrapperAlbumItem>
  );
};

export default AlbumItem;
