import React, { useEffect, useState } from 'react'
import { Outlet ,Link } from 'react-router-dom'

const UserList = () => {
    let [users,setUsers] =useState([]);
    useEffect(()=>{
        async function fetchAllUser(){
            let response= await fetch("https://jsonplaceholder.typicode.com/users")
            let data= await response.json();
            setUsers(data)
        }
        fetchAllUser()
    },[])
   
  return (
    <div>
      <ul>
        {users.map((user)=>{
             console.log( typeof user.id)
            return <li><Link to={user.id.toString()}>{user.username}</Link></li>
        })}
      </ul>
      <Outlet></Outlet>
    </div>
  )
}

export default UserList
