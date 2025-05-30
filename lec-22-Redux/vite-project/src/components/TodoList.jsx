import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../features/todo/todoSlice';

const TodoList = () => {
    let todos= useSelector((store)=>store.todo.todos)
    console.log(todos);
    let dispatch=useDispatch()
  return (
    <div>
      <ul>
        {todos.map((todo)=>{
            return <div>
                <span>{todo.Title}</span>
                <span onClick={()=>dispatch(deleteTodo(todo.id))}>❌</span>
            </div>
        })}
      </ul>
    </div>
  )
}

export default TodoList
