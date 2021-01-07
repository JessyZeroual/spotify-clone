import React, { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { ThemeContext } from "styled-components";
import WrapperLoader from "./Loader.styled";

const HomePage: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <WrapperLoader>
      <ActivityIndicator size="large" color={themeContext.colors.primary} />
    </WrapperLoader>
  );
};

export default HomePage;
