import React from 'react'
import Child from './Child'
const Parent = (props) => {
    return(
        <div>
          <h1>Parent</h1>
          <p>Name={props.Name}</p>
          <p>age = {props.age}</p>
          <Child paisekiinfo={props.dadajikiinfo} gname="ok" gage="14"></Child>
        </div>
      )
}

export function sum(){
    return 5+7
}
export function multiply(){
    return 2*5
}
export default Parent
