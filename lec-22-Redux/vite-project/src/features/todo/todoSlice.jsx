import { createSlice } from "@reduxjs/toolkit";

const initialState={
  todos:[{id:1,Title:"Todo 1"}]  
}

let todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:function(state,action){
           state.todos.push({id:Math.random(),Title:action.payload}) 
        },
        deleteTodo:function(state,action){
            state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
        }
    }
})

export let {addTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer;