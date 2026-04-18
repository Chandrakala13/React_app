import { useState } from "react"
import Header from "./components/Header"
import Todoinput from "./components/todoinput"
import TodoList from "./components/todoList"

fun ction App() {
  const [todos, setTodos] = useState([])
  
  const handleAddTodo = (newtodo) => {
    setTodos([...todos, newtodo])
  }
  
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 py-8 px-4">
      <div className="max-w-md mx-auto">
        <Header />
        <Todoinput addTodo={handleAddTodo} />
        <TodoList todos={todos} deleteTodo={handleDeleteTodo} />
      </div>
    </div>
  )
}

export default App