import React from 'react'
import { useState } from 'react';
const App = () => {
  // let todos=[]
  let [todos,setTodos] = useState([{id:1,title:"first task"}]);
  function addTodo(todoTitle){
      console.log("app component " +todoTitle)
      // todos.push(Title) //cant do this because prev state value should not be changed
      let todo={id:Math.random,title:todoTitle}
      let newTodos =[...todos]; // spread operator to copy array
      newTodos.push(todo);
      setTodos(newTodos);    
  }
  function deleteTodo(id){

  }
  return (
    <div>
      <h1>Todo Appication</h1>
      <TodoInput addTodo={addTodo}></TodoInput>
      <TodoList deleteTodo={deleteTodo} todos={todos}></TodoList>
    </div>
  )
}

function TodoInput(props){
  let [title,setTitle] = useState("");
  console.log("title is "+title)
  function passdata(){
      props.addTodo(title);
  }
  return(
    <div>
      <input placeholder='Enter todo' onChange={function(e){
        console.log(e.target.value);
        setTitle(e.target.value);
      }}></input>
      <button onClick={passdata}>Add</button>
    </div>
  )
}
function TodoList(props){
  return(
    <div>
     {props.todos.map((todo)=>{
        return <Todo deleteTodo={props.deleteTodo} id={todo.id} key={todo.id} title={todo.title}></Todo>
     })}
    </div>
  )
}
function Todo(props){
  let deleteTodoFn= props.deleteTodo;
  return(
    <div>
      <span>{props.title}</span>
      <span>❌</span>
      <span>✏</span>
    </div>
  )
}

export default App
