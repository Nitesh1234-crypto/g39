import React, { createContext, useContext } from 'react'
let datacontext=createContext(0);
let goldKhaHai= createContext("")
const App = () => {
  let data =5;
  return (
    <div>
      <h1>App component</h1>
      <datacontext.Provider value={data}> 
        <Child1></Child1>
      </datacontext.Provider>
      <GrandParent></GrandParent>

    </div>
  )
}
function Child1(){
  return(
    <div>
      <h1>Child one</h1>
      <Child2></Child2>
    </div>
  )
}
function Child2(){
  return(
    <div>
      <h1>Child Two</h1>
      <Child3></Child3>
    </div>
  )
}
function Child3(){
  let value=useContext(datacontext) //way to consume context value
  return(
    <div>
      <h1>Child Three</h1>
      <p>data from app component is {value}</p>
    </div>
  )
}

function GrandParent(){
  let secretinfo = "Gold pipal ke ped ke niche dabba hua hai"
  return(
    <div>
      <h1>I am grandparent and i have secret info</h1>
      <goldKhaHai.Provider value={secretinfo}>
      <Parent></Parent>
      </goldKhaHai.Provider>
    </div>
  )
}
function Parent(){
  return(
    <div>
      <h1>Parent</h1>
     <GrandChild></GrandChild>
    </div>
  )
}

function GrandChild(){
  let value=useContext(goldKhaHai)
  return(
    <div>
      <h1>GrandChild</h1>
      <p>Sona mil gya {value}</p>
    </div>
  )
}

export default App
