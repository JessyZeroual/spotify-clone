import React from "react";
import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import client from "./ApolloClient";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import theme from "./theme/theme";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <NavigationBar />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
