import {useState} from "react"
import Header from "./components/Header"

import Todoinput from "./components/todoinput"
import TodoList from "./components/todoList"

function App() {
  const [todos, setTodos] = useState([])
  const handleAddTodo = (newtodo) => {
    setTodos([...todos, newtodo])
  }
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index) 
    setTodos(newTodos)
  }
 
  return (
    <>
      <Header />
      <Todoinput addTodo={handleAddTodo} />
      <TodoList todos={todos} deleteTodo={handleDeleteTodo} />
    </>
  )
}

export default App