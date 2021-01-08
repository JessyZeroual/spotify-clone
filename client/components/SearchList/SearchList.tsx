import React from "react";
import { FlatList } from "react-native";
import SearchItem from "../SearchItem/SearchItem";

const SearchList: React.FC<{
  artists: {
    id: string;
    name: string;
    images: { url: string }[];
    type: string;
  }[];
}> = ({ artists }) => (
  <FlatList
    data={artists}
    renderItem={({ item }) => (
      <SearchItem id={item.id} name={item.name} uri={item?.images[1]?.url} />
    )}
    keyExtractor={(item) => item.id}
  />
);
export default SearchList;
