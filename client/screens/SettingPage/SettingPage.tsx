import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Container, Text } from "../../styles/commonStyled";
import { WrapperText } from "./Setting.styled";

const Setting: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Container edges={["right", "left", "top"]}>
      <WrapperText>
        <Text bold fontSize={themeContext.fontSizes.h1}>
          Settings
        </Text>
      </WrapperText>
    </Container>
  );
};

export default Setting;
