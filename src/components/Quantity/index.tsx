import { Container, Content, Description, NumberView, Number, Props } from "./styles";

export function Quantity({description, quantity, type}: Props){
  return(
    <Container>
      <Content>
        <Description type={type}>
          {description}
        </Description>
        <NumberView>
          <Number>
            {quantity}
          </Number>
        </NumberView>
      </Content>
    </Container>
  )
}