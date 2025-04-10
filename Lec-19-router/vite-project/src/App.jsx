
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Profile from './component/Profile'
import UserList from './component/UserList'
import User from './component/User'

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/about'element={<About />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/profile/:username' element={<Profile></Profile>}></Route>
        <Route path='/userlist' element={<UserList />}>
            <Route path=":id" element={<User />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
