import { createSlice } from "@reduxjs/toolkit"
let initialState={
  value:0  
}
let counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:function(state,action){
            // state.value= state.value+1;
            state.value += 1;
        },
        decrement:function(state,action){
            state.value-=1;
        }
    }

})

export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer