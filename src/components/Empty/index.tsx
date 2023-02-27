import { Border, Container, Content, Img, Text, TextBold } from "./styles";

export function Empty(){
  return (
    <Container>
      <Content>
        <Border />
        <Img source={{uri: 'https://i.imgur.com/TUexCUS.png'}}/>
        <TextBold>
          Você ainda não tem tarefas cadastradas
        </TextBold>
        <Text>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </Content>
    </Container>
  )
}