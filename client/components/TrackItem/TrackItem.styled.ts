import styled from "styled-components/native";

export const WrapperTrackItem = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding: 15px 0px;
  padding-right: 10px;
`;

export const WrapperIcon = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  border-radius: 45px;
  margin-right: 10px;
  margin-left: auto;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
