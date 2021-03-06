import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { WrapperItem, WrapperIcon, Image } from "./SearchItem.styled";
import { Text } from "../../styles/commonStyled";
import truncateString from "../../utils/truncateString";

const SearchItem: React.FC<{
  id: string;
  name: string;
  uri?: string;
}> = ({ id, name, uri }) => {
  const themeContext = useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <WrapperItem
      onPress={() =>
        navigation.navigate("Artiste", {
          artistId: id,
          name,
          uri
        })
      }
    >
      {uri ? (
        <Image
          source={{
            uri
          }}
        />
      ) : (
        <WrapperIcon>
          <Feather name="user" size={30} color={themeContext.colors.grey} />
        </WrapperIcon>
      )}

      <Text bold fontSize={themeContext.fontSizes.h4}>
        {truncateString(name, 25)}
      </Text>

      <Feather
        style={{ marginLeft: "auto", padding: 10 }}
        name="chevron-right"
        color="white"
        size={30}
      />
    </WrapperItem>
  );
};

export default SearchItem;
