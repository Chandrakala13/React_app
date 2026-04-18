import React from 'react'
import TodoItem from './todoItem'

function TodoList({ todos, deleteTodo }) {
    if (todos.length === 0) {
        return (
            <p className="text-center text-gray-500">No todos yet. Add one above!</p>
        )
    }
    return (
        <div className="space-y-3">
            {todos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    todo={todo} 
                    index={index}
                    deleteTodo={deleteTodo} 
                />
            ))}
        </div>
    )
}

export default TodoList