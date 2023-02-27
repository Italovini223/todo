import styled from "styled-components/native"

type TextProps = {
  type: 'to' | 'do'
}

  export const Top = styled.View`
    width: 100%;
    height: 173px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
  `;

  export const Image = styled.Image`
    width: 20px;
    height: 30px;
    margin-right: 11px;
  `;

  export const Text = styled.Text<TextProps>`
    color: ${({theme, type}) => type === 'to' ? theme.COLORS.BLUE : theme.COLORS.PURPLE_DARK};
    font-size: 30px;

  `;

  export const Logo = styled.View`
    flex-direction: row;
  `;
    
  export const Content = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 0 24px;
  `;

  export const Form = styled.View`
    flex-direction: row;
    width: 100%;
    margin-top: -30px;
  `;

  export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#808080"
  })`
    flex: 1;
    border-radius: 6px;
    margin-right: 4px;
    height: 56px;
    padding: 16px;
    font-size: 16px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    color: ${({theme}) => theme.COLORS.GRAY_100};
  `;


  export const Button = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.COLORS.BLUE_DARK};
    align-items: center;
    justify-content: center;
  `

  export const ButtonText = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 24px;
  `;

  export const Info = styled.View`

    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  `;

  export const List = styled.FlatList`
    flex: 1;
  `;


