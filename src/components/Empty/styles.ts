import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
 
`;

export const Content  = styled.View`
  width: 100%;
  align-items: center;

`;

export const Border = styled.View`
  width: 100%;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_400}
`;

export const Img = styled.Image`
  width: 56px;
  height: 56px;
  margin-top: 48px;
`;

export const TextBold = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_300};
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  margin-top: 16px;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_300};
  font-weight: 500;
  font-size: 14px;
`