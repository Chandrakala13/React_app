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
        <div className="flex gap-2 mb-6">
            <input 
                type="text" 
                placeholder="Enter your todo" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button 
                onClick={handleClick}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
                Add
            </button>    
        </div>
    )
}
export default Todoinput