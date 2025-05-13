import { createSlice } from "@reduxjs/toolkit";

const initialState={
  todos:[{id:1,Title:"Todo 1"}]  
}

let todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:function(state,acton){

        },
        deleteTodo:function(state,actions){

        }
    }
})

export let {addTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer;