import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    console.log("hi")
    let [user,setUser] = useState("")
    let {id}=useParams()
    useEffect(()=>{
        async function fetchSingleUser(){
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            let data = await response.json()
            setUser(data)
        }
        fetchSingleUser()
    },[id])
  return (
    <div>
     <h1>name is {user.name}</h1>
     <p>email is {user.email}</p>
    </div>
  )
}

export default User
