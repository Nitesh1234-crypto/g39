import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
 let navigate=useNavigate()
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <button onClick={()=>navigate("/profile/nitesh")}>Nitesh</button>
        <button onClick={()=>navigate("/profile/pranav")}>Pranav</button>
      </ul>
    </div>
  )
}

export default Header
