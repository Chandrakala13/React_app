import { useState } from "react"

function Todoinput({ addTodo }) {
    const [todo, setTodo] = useState("") 

    const handleClick = () => {
        if (todo.trim() !== "") {
            addTodo(todo)
            setTodo("")
        }
    }
    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter your todo" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)} 
            />
            <button onClick={handleClick}>Add</button>    
        </div>
    )
}
export default Todoinput