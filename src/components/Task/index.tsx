import { ButtonDelete, ButtonDeleteIcon, CheckBox, Container, Text} from "./styles";

type TaskProps = {
  title: string,
  isDone: boolean,
  tasksDone: () => void,
  deleteTask: () => void,
}


export function Task({title, isDone, tasksDone, deleteTask}: TaskProps){
  return(
    <Container> 
      <CheckBox 
        isDone={isDone} 
        onPress={tasksDone}
      />
      <Text isDone={isDone}>
        {title}
      </Text>

      <ButtonDelete
        onPress={deleteTask}
      >
        <ButtonDeleteIcon source={{uri: 'https://i.imgur.com/BDt024o.png'}} />
      </ButtonDelete>

    </Container>
  )
}