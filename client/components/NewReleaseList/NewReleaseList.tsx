import React, { useContext } from "react";
import { FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import { ThemeContext } from "styled-components";
import WrapperNewReleases from "./NewReleaseList.styled";
import { Text } from "../../styles/commonStyled";
import NewReleaseItem from "../NewReleaseItem/NewReleaseItem";
import GET_NEW_RELEASES from "../../gql/Query/newReleases";

const NewReleaseList: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const { loading, data } = useQuery(GET_NEW_RELEASES);
  if (loading) return <Text>Chargement...</Text>;
  return (
    <WrapperNewReleases>
      <Text bold fontSize={themeContext.fontSizes.h2}>
        Dernières sorties populaires
      </Text>
      <FlatList
        data={data.newReleases}
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
    </WrapperNewReleases>
  );
};

export default NewReleaseList;
