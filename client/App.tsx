import React from "react";
import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "react-native";
import client from "./ApolloClient";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="light-content" />
      <NavigationBar />
    </ApolloProvider>
  );
};

export default App;
