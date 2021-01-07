import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ThemeContext } from "styled-components";
import WrapperAlbumList from "./AlbumList.styled";
import { Text } from "../../styles/commonStyled";
import NewReleaseItem from "../AlbumItem/AlbumItem";

const AlbumList: React.FC<{
  nameList: string;
  data: {
    id: string;
    name: string;
    images: { url: string }[];
    type: string;
    artistName: string;
  }[];
}> = ({ nameList, data }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <WrapperAlbumList>
      <Text bold fontSize={themeContext.fontSizes.h2}>
        {nameList}
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <NewReleaseItem
            name={item.name}
            uri={item.images[1].url}
            type={item.type}
            artistName={item.artistName}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </WrapperAlbumList>
  );
};

export default AlbumList;
