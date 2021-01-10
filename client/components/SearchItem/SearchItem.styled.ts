import styled from "styled-components/native";

export const WrapperItem = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  padding: 0px 15px;
`;

export const Image = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 64px;
  margin-right: 10px;
`;

export const WrapperIcon = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  border-radius: 64px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
