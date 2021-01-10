import React, { useState, useContext } from "react";
import { FlatList } from "react-native";
import { ThemeContext } from "styled-components";
import WrapperTrackList from "./TrackList.styled";
import { Text } from "../../styles/commonStyled";
import TrackItem from "../TrackItem/TrackItem";

const TrackList: React.FC<{
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
    <WrapperTrackList>
      <Text bold fontSize={themeContext.fontSizes.h2}>
        {nameList}
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TrackItem
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
    </WrapperTrackList>
  );
};

export default TrackList;
