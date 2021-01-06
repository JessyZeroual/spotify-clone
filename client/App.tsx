import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";
import SearchArtist from "./components/SearchArtist/SearchArtist";

const color = "#fff";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color,
    alignItems: "center",
    justifyContent: "center"
  }
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <SearchArtist />
      </View>
    </ApolloProvider>
  );
};

export default App;
