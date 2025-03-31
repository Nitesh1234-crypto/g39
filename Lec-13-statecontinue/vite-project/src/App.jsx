// import React from 'react'
// import "./App.css"
// import { useState } from 'react';
// //random colour generator 
// const App = () => {
//   let [colour,setColour]=useState("black");
//   function changeColour(){
//     let colourArr=["black","red","green","pink","orange","brown","blue","yellow","grey","purpule"]
//     let randomIdx= Math.floor(Math.random()*10)
//     let randomColour= colourArr[randomIdx];
//     setColour(randomColour);

//   }
//   return (
//     <div>
//       <div style={{height:"100px",width:"100%", background:colour}}></div>
//       <button onClick={changeColour}>Click</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import { useEffect } from 'react'
const App = () => {
  let [count,setCount]=useState(0)
  let [dec,setDec] = useState(0)
  // useEffect(()=>{
  //   console.log("hi"+count);
  // })
  // useEffect(()=>{
  //     console.log("hi"+count);
  //   },[])
  useEffect(()=>{
    console.log("hi"+ count);
  },[dec])
  function increaseCount(){
    setCount(count+1)
  }
  function changeDec(){
    setDec(dec-1);
  }
  console.log(count)
  return (
    <div>
      <button onClick={increaseCount}>Click</button>
      <button onClick={changeDec}>DEC</button>
      <h1>UseEffect hook</h1>
    </div>
  )
}

export default App
