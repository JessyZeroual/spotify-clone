import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  font-size: ${({ theme }) => theme.fontSizes.h3};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`;

export const WrapperSearch = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  margin: 10px 0px;
`;
export const WrapperHeader = styled.View`
  padding: 15px;
`;

export const Icon = styled(AntDesign)`
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Image = styled.ImageBackground`
  flex: 1;
  width: 100%;
  padding-top: 35px;
  display: flex;
  justify-content: space-between;
`;
