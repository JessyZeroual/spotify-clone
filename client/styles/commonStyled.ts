import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 15px;
  padding-bottom: 0px;
`;

export const Text = styled.Text<{
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  bold?: boolean;
}>`
  color: ${({ color, theme }) => color || theme.colors.white};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSizes.h5};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;
