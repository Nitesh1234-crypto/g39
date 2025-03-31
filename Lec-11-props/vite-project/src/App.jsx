import React from 'react'
import Parent from './component/Parent'
import { sum,multiply } from './component/Parent'

const App = () => {
  let secretInfo = "Bade W ke niche 10cr pade hai"
  // sum();
  // multiply();
  return (
    <div>
      <h1>App component</h1>
      <h4>sum is {sum()}</h4>
      <h4>multiplication is {multiply()}</h4>
      <Parent dadajikiinfo={secretInfo} Name="Nitesh" age="23"></Parent>
    </div>
  )
}

// function Parent(props){
//   console.log(props);
//   return(
//     <div>
//       <h1>Parent</h1>
//       <p>Name={props.Name}</p>
//       <p>age = {props.age}</p>
//       <Child paisekiinfo={props.dadajikiinfo} gname="ok" gage="14"></Child>
//     </div>
//   )
// }
// function Child(props){
//     return(
//       <div>

//         <h4>Child</h4>
//         <p>Grand child name is {props.gname}</p>
//         <p>Grand Child age is {props.gage}</p>
//         <h1>Paise pade hai {props.paisekiinfo}</h1>
//       </div>
//     )
// }
export default App
