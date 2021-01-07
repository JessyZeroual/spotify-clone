import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { WrapperItemNewRelease, Image } from "./NewReleaseItem.styled";
import { Text } from "../../styles/commonStyled";
import truncateString from "../../utils/truncateString";

const NewReleaseItem: React.FC<{
  name: string;
  uri: string;
  type: string;
  artistName: string;
}> = ({ name, uri, type, artistName }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <WrapperItemNewRelease>
      <Image
        source={{
          uri
        }}
      />
      <Text bold>{truncateString(name, 18)}</Text>
      <Text color={themeContext.colors.lightGrey}>
        {type} • {truncateString(artistName, 15)}
      </Text>
    </WrapperItemNewRelease>
  );
};

export default NewReleaseItem;
