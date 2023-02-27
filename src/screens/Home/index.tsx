import { useState } from "react"
import { FlatList, Alert } from "react-native"
import { Top, Image, Logo, Text, Content, Form, Input, Button, ButtonText, Info } from "./styles"

import { Quantity } from "../../components/Quantity"
import { Task } from "../../components/Task"
import { Empty } from "../../components/Empty"

type TasksProps = {
  title: string,
  isDone: boolean,
}


export function Home(){
  const [tasks , setTasks] = useState<TasksProps[]>([])
  const [title, setTitle] =  useState('')

  function handleAddTask(){
    const taskAlreadyExists = tasks.find(task => task.title === title);

    if(taskAlreadyExists) {
      return Alert.alert("Tarefa ja existe", "Ja existe uma tarefa com este nome")
    }

    const task = {
      title: title,
      isDone: false
    }
    setTasks(prevState => [...prevState, task])
    setTitle('')
  }

  async function handleSetIsDoneTrue(title: string){
    const oldTask = tasks.find(task => task.title === title);
    const newTasks = tasks.filter(task => task.title !== title);

    if(oldTask) {
      const task = {
       title: oldTask.title,
       isDone: true
      }

      setTasks([...newTasks, task])
    }

  }

  async function handleSetIsDoneFalse(title: string){
    const oldTask = tasks.find(task => task.title === title);
    const newTasks = tasks.filter(task => task.title !== title);

    if(oldTask) {
      const task = {
       title: oldTask.title,
       isDone: false
      }

      setTasks([...newTasks, task])
    }

  }


  function handleDeleteTask(title: string) {
    Alert.alert('Excluir', "Deseja Excluir a tarefa?", [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task.title !== title))
      }, 
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }


  return (
    <>
      <Top>
        <Image source={{uri: 'https://i.imgur.com/RZ2rCI8.png'}} />
        <Logo>
          <Text type="to">
            to
          </Text>
          <Text type="do">
            do
          </Text>
        </Logo>
      </Top>
      <Content>
        <Form>
          <Input
            placeholder="Adicione uma nova tarefa"
            onChangeText={setTitle}
            value={title}
          />
          <Button
            onPress={handleAddTask}
          >
            <ButtonText>
              +
            </ButtonText>
          </Button>
        </Form>
        <Info>
          <Quantity 
            description="criadas"
            quantity={tasks.length}
            type='created'
          />
          <Quantity 
            description="concluídas"
            quantity={tasks.filter(task => task.isDone === true).length}
            type='completed'
          />
        </Info>

        <FlatList 
            data={tasks}
            keyExtractor={item => item.title}
            ListEmptyComponent={() => (
              <Empty />
            )}
            renderItem={({item}) => (
              <Task 
                title={item.title}
                isDone={item.isDone}
                tasksDone={() => item.isDone === false ? handleSetIsDoneTrue(item.title) : handleSetIsDoneFalse(item.title)}
                deleteTask={() => handleDeleteTask(item.title)}
              />
            )}
          />
      </Content>
    </>
  )
}