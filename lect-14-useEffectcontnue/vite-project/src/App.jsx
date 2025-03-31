// import React, { useEffect } from 'react'
// import { useState } from 'react'
// // https://jsonplaceholder.typicode.com/users
// const App = () => {
//   let [users,setUsers] =useState([])
 
//   useEffect(()=>{
//     async function fetchUserData(URL){
//       let response= await fetch(URL)
//       let userData=await response.json();
//       console.log(userData);
//       setUsers(userData);
//    }
//    fetchUserData("https://jsonplaceholder.typicode.com/users");
//   },[])
  

//   return (
//     <div>
//       {/* <User username={users[0].username} email={users[0].email}></User>
//       <User username={users[1].username} email={users[1].email}></User> */}
//       {users.map((user)=>{
//         return <User key={user.id} username={user.username} email={user.email}></User>
//       })}
//     </div>
//   )
// }
// function User(props){
//   return(
//     <div>
//       <span>Username:{props.username}</span>
//       <span>email:{props.email}</span>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'

const App = () => {
  let [value,setValue] = useState(0)
  useEffect(()=>{
    let id=setInterval(()=>{
      console.log(value);
      setValue((prev)=>prev+1) //state update are asynchronous in nature to get the update state use callback
    },1000)
    return ()=>{clearInterval(id)} //cleanup function //run on unmounting phase
  },[])
  return (
    <div>
      <h1>Timer</h1>
      <h4>{value}</h4>
    </div>
  )
}

export default App
