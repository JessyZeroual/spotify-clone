import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Text, ContainerCenter } from "../../styles/commonStyled";

const ErrorMessage: React.FC<{ errorMessage?: string }> = ({
  errorMessage
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <ContainerCenter>
      <Text bold fontSize={themeContext.fontSizes.h2}>
        {errorMessage || "Erreur interne"}
      </Text>
    </ContainerCenter>
  );
};

export default ErrorMessage;
