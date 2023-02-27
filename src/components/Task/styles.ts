import styled from "styled-components/native";

type Props = {
  isDone: boolean
}

export const Container = styled.View`

  height: 54px;
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
  margin-bottom: 8px;
  background-color: ${({theme}) => theme.COLORS.GRAY_400};
`;

export const CheckBox = styled.TouchableOpacity<Props>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;

  border: 1px solid ${({theme, isDone}) => isDone === true ? theme.COLORS.BLUE_DARK : theme.COLORS.BLUE};
  background-color: ${({theme, isDone}) => isDone === true ? theme.COLORS.BLUE_DARK : 'transparent'};
`;


export const Text = styled.Text<Props>`
  width: 230px;
  color: ${({theme, isDone}) => isDone === true ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
  font-size: 14px;
  text-align: center;
  margin-right: 8px;
  text-decoration: ${({isDone}) => isDone === true ? 'line-through' : 'none'};
`;

export const ButtonDelete = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

export const ButtonDeleteIcon = styled.Image`
  width: 14px;
  height: 14px;
`;

