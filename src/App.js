import React, {useState, useEffect} from 'react'
import {Container} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Todo from './Components/Todo';
import TodoFom from './Components/TodoFom';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const localTodos = localStorage.getItem("todos")
    console.log({localStorage});

    if (localTodos) {
      setTodos(JSON.parse(localTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  

  const addTodos = async todo => {
    setTodos([...todos, todo])
  }



  return (
    <Container fluid>
      <h1>Todo with localStorage</h1>
      <Todo todos={todos} markComplete={markComplete}/>
      <TodoFom addTodos={addTodos}/>
    </Container>
  )
  
}

export default App;
