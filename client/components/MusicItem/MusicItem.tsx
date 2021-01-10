import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { FlatList, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { WrapperMusicItem, WrapperIcon } from "./MusicItem.styled";
import { Text } from "../../styles/commonStyled";
import truncateString from "../../utils/truncateString";

const MusicItem: React.FC<{
  id: string;
  name: string;
  artists: {
    id: string;
    name: string;
  }[];
  selectedId: string;
  setSelectedId: (id: string) => void;
}> = ({ id, name, artists, selectedId, setSelectedId }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <WrapperMusicItem
      onPress={() => {
        setSelectedId(selectedId === id ? "" : id);
      }}
    >
      <View>
        <Text
          bold
          color={
            selectedId === id
              ? themeContext.colors.primary
              : themeContext.colors.white
          }
          fontSize={themeContext.fontSizes.h3}
        >
          {truncateString(name, 32)}
        </Text>

        <FlatList
          data={artists.slice(0, 5)}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          ItemSeparatorComponent={() => <Text>,&nbsp;</Text>}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      <WrapperIcon>
        <Fontisto
          name={selectedId === id ? "pause" : "play"}
          color={
            selectedId === id
              ? themeContext.colors.primary
              : themeContext.colors.lightGrey
          }
          size={15}
        />
      </WrapperIcon>
    </WrapperMusicItem>
  );
};

export default MusicItem;
