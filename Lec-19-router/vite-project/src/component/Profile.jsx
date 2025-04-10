import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    let {username}=useParams();
    console.log(username)
  return (
    <div>
      <h1>profile page of {username} </h1>
    </div>
  )
}

export default Profile
