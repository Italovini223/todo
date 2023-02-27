import styled from 'styled-components/native'

export type Props = {
  description: string,
  quantity: number,
  type: 'completed' | 'created'
}

type DescriptionProps = {
  type: 'completed' | 'created'
}

export const Container = styled.View`
  margin-top: 33px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.Text.attrs({

})<DescriptionProps>`
  font-size: 14px;
  color: ${({theme, type}) => type === 'created' ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
`;

export const NumberView = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  margin-left: 8px;
  background-color: ${({theme}) => theme.COLORS.GRAY_400};
  justify-content: center;
  align-items: center;
`;

export const Number = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-size: 14px;
`;