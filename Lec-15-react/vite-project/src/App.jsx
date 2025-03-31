// import React, { useState } from 'react'

// const App = () => {
// let [value,setValue] = useState(null);
//   function getdata(data){
//       console.log(data);
//       setValue(data);
//   }
//   return (
//     <div>
//       <Child1 getdata={getdata}></Child1>
//       <Child2 data={value}></Child2>
//     </div>
//   )
// }

// function Child1(props){
//   let getdata= props.getdata
//   let data=5
//   return(
//     <div>
//       <h1>Child1</h1>
//       <p>{data}</p>
//       <button onClick={()=>{getdata(data)}}>give data</button>
//     </div>
//   )
// }
// function Child2(props){
//   return(
//     <div>
//       <h1>Child2</h1>
//       <h4>{props.data}</h4>
//     </div>
//   )
// }

// export default App








import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Todo Appication</h1>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  )
}

function TodoInput(){
  return(
    <div>
      <input placeholder='Enter todo'></input>
      <button>Add</button>
    </div>
  )
}
function TodoList(){
  return(
    <div>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
    </div>
  )
}
function Todo(){
  return(
    <div>
      <span>todo title</span>
      <span>❌</span>
      <span>✏</span>
    </div>
  )
}

export default App
