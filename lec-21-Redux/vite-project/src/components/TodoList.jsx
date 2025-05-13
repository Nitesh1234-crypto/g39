import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
    let todos= useSelector((store)=>store.todo.todos)
    console.log(todos);
  return (
    <div>
      <ul>
        {todos.map((todo)=>{
            return <div>
                <span>{todo.Title}</span>
                <span>❌</span>
            </div>
        })}
      </ul>
    </div>
  )
}

export default TodoList
