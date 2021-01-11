import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { FlatList, View } from "react-native";
import { Fontisto, Entypo } from "@expo/vector-icons";
import { WrapperTrackItem, WrapperIcon } from "./TrackItem.styled";
import { Text } from "../../styles/commonStyled";
import truncateString from "../../utils/truncateString";

const TrackItem: React.FC<{
  id: string;
  name: string;
  artists: {
    id: string;
    name: string;
  }[];
  previewUrl: string;
  selectedId: string;
  setSelectedId: (id: string) => void;
}> = ({ id, name, artists, previewUrl, selectedId, setSelectedId }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <WrapperTrackItem onPress={() => previewUrl && setSelectedId(id)}>
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
      {previewUrl ? (
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
      ) : (
        <WrapperIcon>
          <Entypo
            name="block"
            color={themeContext.colors.lightGrey}
            size={25}
          />
        </WrapperIcon>
      )}
    </WrapperTrackItem>
  );
};

export default TrackItem;
