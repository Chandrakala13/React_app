import React from 'react'

function TodoItem({ todo, index, deleteTodo }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
      <p className="text-gray-800">{todo}</p>
      <button 
        onClick={() => deleteTodo(index)}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem 