import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black};
`;
export const WrapperList = styled.ScrollView`
  padding: 15px;
  padding-top: 0px;
`;

export const WrapperIcon = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  background-color: rgba(33, 33, 33, 0.4);
  margin: 15px;
`;
export const WrapperText = styled(LinearGradient)`
  display: flex;
  justify-content: center;
  height: 100px;
  padding-left: 15px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.ImageBackground`
  height: 400px;
  width: 100%;
  padding-top: 35px;
  display: flex;
  justify-content: space-between;
`;
