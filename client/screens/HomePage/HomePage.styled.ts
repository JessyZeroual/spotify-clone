import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const WrapperList = styled.ScrollView`
  padding: 15px;
  padding-top: 0px;
`;

export const WrapperHeader = styled.View`
  padding: 15px;
`;

export const WrapperSearch = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  margin: 10px 0px;
  height: 50px;
`;

export const Icon = styled(AntDesign)`
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.grey};
`;
