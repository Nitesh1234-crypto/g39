import { useState } from 'react';
import './App.css'

function App() {
  
  return (
    <div>
      <h1>Counter application</h1>
      {/* <Counter></Counter> */}
      <Random></Random>
    </div>
  )
}
function Counter(){
  // let count=0;
    let [count,setCount]=useState(0);


  function increase(){
    setCount(count+1)
      // count =count+1
      // console.log(count);
  }
  function decrease(){
    setCount(count-1);
    // count=count-1
    // console.log(count);
  }
  return(
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>Inc</button>
      <button onClick={decrease}>Dec</button>
    </div>
  )
}

function Random(){
  let [value,setValue]= useState("click button to generate random number")
  function btnClickHandler(){
    let randomValue= (Math.random());
    setValue(randomValue);
  }
  return(
    <div>
      <h2>{value}</h2>
      <button onClick={btnClickHandler}>Click</button>
    </div>
  )
}




export default App
