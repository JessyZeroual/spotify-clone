import React, { useState, useContext } from "react";
import { FlatList } from "react-native";
import { ThemeContext } from "styled-components";
import WrapperMusicList from "./MusicList.styled";
import { Text } from "../../styles/commonStyled";
import MusicItem from "../MusicItem/MusicItem";

const MusicList: React.FC<{
  nameList: string;
  data: {
    id: string;
    name: string;
    artists: { id: string; name: string }[];
  }[];
}> = ({ nameList, data }) => {
  const themeContext = useContext(ThemeContext);
  const [selectedId, setSelectedId] = useState("");
  return (
    <WrapperMusicList>
      <Text bold fontSize={themeContext.fontSizes.h2}>
        {nameList}
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <MusicItem
            id={item.id}
            name={item.name}
            artists={item.artists}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        )}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </WrapperMusicList>
  );
};

export default MusicList;
