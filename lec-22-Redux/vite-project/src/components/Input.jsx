import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const Input = () => {
  let [input,setInput]=useState("");
  let dispatch=useDispatch()
  return (
    <div>
      <input type="text" placeholder='Enter Todo Title' onChange={(e)=>setInput(e.target.value)} />
      <button onClick={()=>dispatch(addTodo(input))}>Add</button>
    </div>
  )
}

export default Input
